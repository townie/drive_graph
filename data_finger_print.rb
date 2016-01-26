
class FingerPrint
	attr_reader :service
	DEFAULT_EDGE_DATA = {  
	   :position => {},
	   :group => "edges",
	   :removed => false,
	   :selected => false,
	   :selectable => true,
	   :locked => false,
	   :grabbed => false,
	   :grabbable => true,
	   :classes => ""
	}

	DEFAULT_NODE_DATA = {  
	   :group => "nodes",
	   :removed => false,
	   :selected => false,
	   :selectable => true,
	   :locked => false,
	   :grabbed => false,
	   :grabbable => true,
	   :classes => ""
	}

	def initialize(service)
		@service = service
	end

	def change_cassandra_datastore(service)
		service.cassandra_backend?(:dlt) ? Backupify::CassUtil::Selector.use_new_datastores { yield } : Backupify::CassUtil::Selector.use_old_datastores { yield }
	end

	def dcd(options={})
		options[:force_linear] ||= true
		options[:snapshot_id] ||= service.status["hierarchy_snapshot_id"]
		DataCollectors::Service.new(service, options)
	end

	def data
		change_cassandra_datastore(service) { dcd.data(count: 100_000) };
	end
	

	def flat_vals
		@flat_vals.nil? ? build_flat_vals : @flat_vals
	end

	def keys_for_service_datum

	end

	def build_flat_vals
		@flat_vals = data.map do |datum|
		  # configs: [:document_id,  :folder_ids, :document_type, :title]
		  [:document_id, :document_type,  :folder_ids].inject({}) {|hash, fld| hash[fld] = (fld == :folder_ids ? datum.folder_ids.keys : datum.send(fld)); hash }
		end
	end

	def edge_weight_function(fv)
		0.01 * fv[:folder_ids].count
	end

	def edge_group(fv)
		case fv[:document_type]
		when 'folder'
			'folder'
		else
			'file'
		end
	end

	def build_edges
		@edges = []
		id_counter = 0

		flat_vals.each do |fv| 
		  fv[:folder_ids].each do | val|
			#  {"data":{"source":"611408","target":"605755","weight":0.155478187,"group":"pi","networkId":1133,"networkGroupId":18,"intn":true,"rIntnId":2,"id":"e0"},"position":{},
			#   "group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""}, 
			# next if fv[2] != "folder"
		  @edges << {"data" => {:source => fv[:document_id],
						   					   :target => val,
						   					   :score =>  edge_weight_function(fv),
						   					   :group => edge_group(fv),
						   					   :networkId => 1133,
						   					   :intn => true,
						   					   :rIntnId => 2,
						   					   :id => id_counter} }.merge(DEFAULT_EDGE_DATA)
		   id_counter += 1
		  end
		end

		@edges
	end
	
	def edges
		@edges.nil? ? build_edges : @edges 
	end

	def nodes
		@nodes.nil? ? build_nodes : @nodes 
	end

	def weight_count
		@weight_count.nil? ? build_weight_count : @weight_count
	end
	# PRINT
	def print_edges
		puts edges.compact.to_json
	end
	# PRINT
	def print_folders_edges
		@folder_edges = edges.select {|edge| edge["data"][:group] == 'folder' }.compact;
	end

	def folder_edges
		puts folder_edges.to_json
	end

	def build_weight_count 
		@weight_count = {}
		edges.each do |edge|
			@weight_count[edge["data"][:source]] = @weight_count[edge["data"][:source]].to_i + 1
		end
		@weight_count
	end

	def node_weight_function(fv)
		0.01 * weight_count[fv[0]].to_i
	end

	def build_nodes
		@nodes = [] 
		@nodes = flat_vals.map do |fv| 
			# {"data":{"id":"612341","idInt":612341,"name":"RAD9A","score":0.128974131563619387,"query":false}
			# ,"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,
			# "classes":"fn6935 fn6219 fn6680 fn6676 fn10713 fn7552 fn7495"}, 
			# next if fv[2] != "folder"
		  {"data" => { 
		  	:id => fv[:document_id],
		  	:name => ".",
		  	:type => fv[:document_type],
		  	:score => node_weight_function(fv) ||  0.01
		  } }. merge(DEFAULT_NODE_DATA)
		end.compact
		@nodes
	end
	
	# PRINT
	def print_nodes	
		puts nodes.to_json
	end

	# PRINT
	def print_folder_nodes
		folder_nodes = nodes.select {|edge| edge["data"][:type] == 	'folder' }.compact;
		puts folder_nodes.to_json
	end

	def write_to_csv
		File.open("/tmp/#{service.id}_tree.csv", 'wb') do |f|
			graph = (nodes + edges)
			f.write(graph.to_json)
		end
	end

	def write_folder_to_csv
		File.open("/tmp/#{service.id}_folders_tree.csv", 'wb') do |f|
			graph = (nodes + edges)
			f.write(graph.to_json)
		end
	end
end



dfp = FingerPrint.new(s)
dfp.write_to_csv

dfp.write_to_csv

### OG ###
# Own service
service_id = 13840915
s = Service.find service_id