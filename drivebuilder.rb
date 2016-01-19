# Own service
service_id = 13840915
s = Service.find service_id

# Defaults for data

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

options = {}
options[:force_linear] = true
options[:snapshot_id] = s.status["hierarchy_snapshot_id"]
dcd = DataCollectors::Drive.new(s, options)

############### Cassandra #############
############### Cassandra #############
############### Cassandra #############
def change_cassandra_datastore(service)
  service.cassandra_backend?(:dlt) ? Backupify::CassUtil::Selector.use_new_datastores { yield } : Backupify::CassUtil::Selector.use_old_datastores { yield }
end
  
data = change_cassandra_datastore(s) { dcd.data(count: 100_000) };


############### flat_vals #############
############### flat_vals #############
############### flat_vals #############

flat_vals = []
data.each do |datum|
  # configs: [:document_id,  :folder_ids, :document_type, :title]
  flat_vals << [:document_id, :title, :document_type,  :folder_ids].map {|fld| fld == :folder_ids ? datum.folder_ids.keys : datum.send(fld) }
end;


############### EDGES #############
############### EDGES #############
############### EDGES #############


def edge_weight_function(fv)
	0.01 * fv[3].count
end

def edge_group(fv)
	case fv[2]
	when 'folder'
		'folder'
	else
		'file'
	end
end

edges = []
id_counter = 0

flat_vals.each do |fv| 
  fv[3].each do | val|
	#  	{"data":{"source":"611408","target":"605755","weight":0.155478187,"group":"pi","networkId":1133,"networkGroupId":18,"intn":true,"rIntnId":2,"id":"e0"},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""}, 
	# next if fv[2] != "folder"
  edges << {"data" => {:source => val,
				   					   :target => fv[0],
				   					   :score =>  edge_weight_function(fv),
				   					   :group => edge_group(fv),
				   					   :networkId => 1133,
				   					   :intn => true,
				   					   :rIntnId => 2,
				   					   :id => id_counter} }.merge(DEFAULT_EDGE_DATA)
   id_counter += 1
  end
end;

# PRINT
puts edges.compact.to_json
# PRINT

@weight_count = {}
edges.each do |edge|
	@weight_count[edge["data"][:source]] = @weight_count[edge["data"][:source]].to_i + 1
end;

WEIGHTS = @weight_count;
############### NODES #############
############### NODES #############
############### NODES #############


def node_weight_function(fv)
	0.01 * WEIGHTS[fv[0]].to_i
end

nodes = []

nodes = flat_vals.map do |fv| 
	# {"data":{"id":"612341","idInt":612341,"name":"RAD9A","score":0.128974131563619387,"query":false}
	# ,"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":"fn6935 fn6219 fn6680 fn6676 fn10713 fn7552 fn7495"}, 
	# next if fv[2] != "folder"
  {"data" => { 
  	:id => fv[0],
  	:name => fv[1],
  	:type => fv[2],
  	:score => node_weight_function(fv) ||  0.01
  } }. merge(DEFAULT_NODE_DATA)
end.compact;

# PRINT
puts nodes.to_json
# PRINT


############### CSV #############
############### CSV #############
############### CSV #############


CSV.open("/tmp/#{service_id}_tree.csv", 'wb') do | csv|
	(nodes + edges).each { |node| csv << node }
end

