var cy;

$(function(){ // on dom ready

  cy = cytoscape({
    container: document.getElementById('cy'),

    style: [{"selector":"core","style":{"selection-box-color":"#AAD8FF","selection-box-border-color":"#8BB0D0","selection-box-opacity":"0.5"}}, 
						{"selector":"node","style":{"width":"mapData(score, 0, 0.02, 200, 60)","height":"mapData(score, 0, 0.02, 200, 60)","content":"data(name)","font-size":"12px","text-valign":"center","text-halign":"center","background-color":"#60AAEF","text-outline-color":"#555","text-outline-width":"2px","color":"#fff","overlay-padding":"6px","z-index":"10"}}, 
						{"selector":"node[?attr]","style":{"shape":"rectangle","background-color":"#aaa","text-outline-color":"#aaa","width":"16px","height":"16px","font-size":"6px","z-index":"1"}}, 
						{"selector":"node[?query]","style":{"background-clip":"none","background-fit":"contain"}}, 
						{"selector":"node:selected","style":{"border-width":"6px","border-color":"#AAD8FF","border-opacity":"0.5","background-color":"#77828C","text-outline-color":"#77828C"}}, 
						{"selector":"edge","style":{"curve-style":"haystack","haystack-radius":"0.5","opacity":"0.4","line-color":"#bbb","width":"mapData(weight, 0, 1, 1, 8)","overlay-padding":"3px"}}, 
						{"selector":"node.unhighlighted","style":{"opacity":"0.2"}}, 
						{"selector":"edge.unhighlighted","style":{"opacity":"0.05"}}, 
						{"selector":".highlighted","style":{"z-index":"999999"}}, 
						{"selector":"node.highlighted","style":{"border-width":"6px","border-color":"#AAD8FF","border-opacity":"0.5","background-color":"#394855","text-outline-color":"#394855","shadow-blur":"12px","shadow-color":"#000","shadow-opacity":"0.8","shadow-offset-x":"0px","shadow-offset-y":"4px"}}, 
						{"selector":"edge.filtered","style":{"opacity":"0"}}, 
						{"selector":"edge[group=\"file\"]","style":{"line-color":"#60AAEF"}}, 
						{"selector":"edge[group=\"folder\"]","style":{"line-color":"#FF0000"}}, 
						{"selector":"edge[group=\"spd\"]","style":{"line-color":"#dad4a2"}}, 
						{"selector":"edge[group=\"spd_attr\"]","style":{"line-color":"#D0D0D0"}}, 
						{"selector":"edge[group=\"reg\"]","style":{"line-color":"#D0D0D0"}}, 
						{"selector":"edge[group=\"reg_attr\"]","style":{"line-color":"#D0D0D0"}},   
						{"selector":"edge[group=\"user\"]","style":{"line-color":"#f0ec86"}}],

    elements: [
    						{"data":{"id":"0B_Cb29svQs3nVlNZZzNIc01BX0NkRTFrclN1NmtfU2loeXdV","name":"Your document form xerox-sales001.pdf","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B_Cb29svQs3nNDNiY1FUT25SLW95Vkx0UnlqNVZwcnl4NWVz","name":"Your document form xerox-sales001.pdf","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"1myjVfn1CHBuCIUexFVm8rO0Y5xz3Agr5n6aLUAg0FEo","name":"Untitled spreadsheet","type":"spreadsheet","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"1uvoPigXBorUmtfrgNRC2jTc5tsuRvStNsexaMYj6Csg","name":"Untitled document","type":"document","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"1y2HumGOJWGXVR2pm3nuarmfQK_mgaw-77kuE7NJvZgw","name":"Subscription Provisioning","type":"document","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B_Cb29svQs3nQndnTmd6dm5ZTVk","name":"product_provisioning.png","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B_Cb29svQs3nSGJ4bjlCbUE5RzQ","name":"product_provisioning.png","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"1yutc9qMlD73WIwFmLPWZFo_RqlefP_9-36c8FNIj7wc","name":"Product Provisioning Design Doc","type":"document","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B_Cb29svQs3nQ1Z0RDQ0c0NPTVk","name":"product_provisioning.html","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B_Cb29svQs3nc2pKS2xncHlYLXM","name":"Untitled Diagram.html","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B_Cb29svQs3nMkNFWkRXT1lQeFc1d3hGU3ZSb1hKVDZXV1k0","name":"Boston Printers.pdf","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0Bwo7n4zi4ijhZlp2amQ2M1EzY28","name":"OnHub","type":"folder","score":0.0},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B9fpFUHuMSE-Rkp6RVNXZVdQX0U","name":"Sustaining","type":"folder","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B4hoL2srSDYMfjZXcnpVMEdvT0tzV3lyNUlkc1BkWHhXM2dBLTBYc0Q4blNOUkFPNDdoSm8","name":"Condo Pics","type":"folder","score":0.0},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"1RkyFJLUal9ujau13MQm_0lYT87uDaP2Crd1nUANWbdU","name":"Attachment Errors","type":"spreadsheet","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"11QPAcb9jW0_UsuzjqfzTa0tCu8m1Oa2hHSEMfSpD7ac","name":"Untitled spreadsheet","type":"spreadsheet","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"15OwL564TAmxObw0UJYOuj5dxIdlCMgojsMr0qtm0hyU","name":"Expense Report Form.xls","type":"spreadsheet","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B_Cb29svQs3nRV9RUlNuRjFNSlZzdGxZYWNndVpFSEJiYy04","name":"bmosier_expenses.pdf","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B_Cb29svQs3nVGNhTlVJS25mV0V2TVR1Ukg2cW8wVzRXOXdV","name":"Expense Report Form.xls","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"15bo9hQwD62DwVb9SXH-blCd7HLCVYEx67xsA7Jeqllk","name":"Travel Info","type":"document","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0APCb29svQs3nUk9PVA","name":"My Drive","type":"folder","score":0.0},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""}
    						,
							 {"data":{"source":"0B_Cb29svQs3nVlNZZzNIc01BX0NkRTFrclN1NmtfU2loeXdV","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":0},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B_Cb29svQs3nNDNiY1FUT25SLW95Vkx0UnlqNVZwcnl4NWVz","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":1},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"1myjVfn1CHBuCIUexFVm8rO0Y5xz3Agr5n6aLUAg0FEo","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":2},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"1uvoPigXBorUmtfrgNRC2jTc5tsuRvStNsexaMYj6Csg","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":3},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"1y2HumGOJWGXVR2pm3nuarmfQK_mgaw-77kuE7NJvZgw","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":4},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B_Cb29svQs3nQndnTmd6dm5ZTVk","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":5},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B_Cb29svQs3nSGJ4bjlCbUE5RzQ","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":6},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"1yutc9qMlD73WIwFmLPWZFo_RqlefP_9-36c8FNIj7wc","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":7},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B_Cb29svQs3nQ1Z0RDQ0c0NPTVk","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":8},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B_Cb29svQs3nc2pKS2xncHlYLXM","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":9},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B_Cb29svQs3nMkNFWkRXT1lQeFc1d3hGU3ZSb1hKVDZXV1k0","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":10},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B9fpFUHuMSE-Rkp6RVNXZVdQX0U","target":"0B9fpFUHuMSE-NTZsRXFpOUJmaEk","score":0.01,"group":"folder","networkId":1133,"intn":true,"rIntnId":2,"id":11},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"1RkyFJLUal9ujau13MQm_0lYT87uDaP2Crd1nUANWbdU","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":12},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"11QPAcb9jW0_UsuzjqfzTa0tCu8m1Oa2hHSEMfSpD7ac","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":13},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"15OwL564TAmxObw0UJYOuj5dxIdlCMgojsMr0qtm0hyU","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":14},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B_Cb29svQs3nRV9RUlNuRjFNSlZzdGxZYWNndVpFSEJiYy04","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":15},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B_Cb29svQs3nVGNhTlVJS25mV0V2TVR1Ukg2cW8wVzRXOXdV","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":16},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"15bo9hQwD62DwVb9SXH-blCd7HLCVYEx67xsA7Jeqllk","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":17},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""}
							]
  });

// bmo: edges: {"data":{"source":"0B_Cb29svQs3nVlNZZzNIc01BX0NkRTFrclN1NmtfU2loeXdV","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":0},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B_Cb29svQs3nNDNiY1FUT25SLW95Vkx0UnlqNVZwcnl4NWVz","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":1},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"1myjVfn1CHBuCIUexFVm8rO0Y5xz3Agr5n6aLUAg0FEo","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":2},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"1uvoPigXBorUmtfrgNRC2jTc5tsuRvStNsexaMYj6Csg","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":3},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"1y2HumGOJWGXVR2pm3nuarmfQK_mgaw-77kuE7NJvZgw","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":4},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B_Cb29svQs3nQndnTmd6dm5ZTVk","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":5},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B_Cb29svQs3nSGJ4bjlCbUE5RzQ","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":6},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"1yutc9qMlD73WIwFmLPWZFo_RqlefP_9-36c8FNIj7wc","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":7},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B_Cb29svQs3nQ1Z0RDQ0c0NPTVk","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":8},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B_Cb29svQs3nc2pKS2xncHlYLXM","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":9},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B_Cb29svQs3nMkNFWkRXT1lQeFc1d3hGU3ZSb1hKVDZXV1k0","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":10},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B9fpFUHuMSE-Rkp6RVNXZVdQX0U","target":"0B9fpFUHuMSE-NTZsRXFpOUJmaEk","score":0.01,"group":"folder","networkId":1133,"intn":true,"rIntnId":2,"id":11},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"1RkyFJLUal9ujau13MQm_0lYT87uDaP2Crd1nUANWbdU","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":12},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"11QPAcb9jW0_UsuzjqfzTa0tCu8m1Oa2hHSEMfSpD7ac","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":13},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"15OwL564TAmxObw0UJYOuj5dxIdlCMgojsMr0qtm0hyU","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":14},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B_Cb29svQs3nRV9RUlNuRjFNSlZzdGxZYWNndVpFSEJiYy04","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":15},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"0B_Cb29svQs3nVGNhTlVJS25mV0V2TVR1Ukg2cW8wVzRXOXdV","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":16},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"source":"15bo9hQwD62DwVb9SXH-blCd7HLCVYEx67xsA7Jeqllk","target":"0APCb29svQs3nUk9PVA","score":0.01,"group":"file","networkId":1133,"intn":true,"rIntnId":2,"id":17},"position":{},"group":"edges","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""}
// bmo: nodes: {"data":{"id":"0B_Cb29svQs3nVlNZZzNIc01BX0NkRTFrclN1NmtfU2loeXdV","name":"Your document form xerox-sales001.pdf","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B_Cb29svQs3nNDNiY1FUT25SLW95Vkx0UnlqNVZwcnl4NWVz","name":"Your document form xerox-sales001.pdf","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"1myjVfn1CHBuCIUexFVm8rO0Y5xz3Agr5n6aLUAg0FEo","name":"Untitled spreadsheet","type":"spreadsheet","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"1uvoPigXBorUmtfrgNRC2jTc5tsuRvStNsexaMYj6Csg","name":"Untitled document","type":"document","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"1y2HumGOJWGXVR2pm3nuarmfQK_mgaw-77kuE7NJvZgw","name":"Subscription Provisioning","type":"document","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B_Cb29svQs3nQndnTmd6dm5ZTVk","name":"product_provisioning.png","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B_Cb29svQs3nSGJ4bjlCbUE5RzQ","name":"product_provisioning.png","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"1yutc9qMlD73WIwFmLPWZFo_RqlefP_9-36c8FNIj7wc","name":"Product Provisioning Design Doc","type":"document","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B_Cb29svQs3nQ1Z0RDQ0c0NPTVk","name":"product_provisioning.html","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B_Cb29svQs3nc2pKS2xncHlYLXM","name":"Untitled Diagram.html","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B_Cb29svQs3nMkNFWkRXT1lQeFc1d3hGU3ZSb1hKVDZXV1k0","name":"Boston Printers.pdf","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0Bwo7n4zi4ijhZlp2amQ2M1EzY28","name":"OnHub","type":"folder","score":0.0},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B9fpFUHuMSE-Rkp6RVNXZVdQX0U","name":"Sustaining","type":"folder","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B4hoL2srSDYMfjZXcnpVMEdvT0tzV3lyNUlkc1BkWHhXM2dBLTBYc0Q4blNOUkFPNDdoSm8","name":"Condo Pics","type":"folder","score":0.0},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"1RkyFJLUal9ujau13MQm_0lYT87uDaP2Crd1nUANWbdU","name":"Attachment Errors","type":"spreadsheet","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"11QPAcb9jW0_UsuzjqfzTa0tCu8m1Oa2hHSEMfSpD7ac","name":"Untitled spreadsheet","type":"spreadsheet","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"15OwL564TAmxObw0UJYOuj5dxIdlCMgojsMr0qtm0hyU","name":"Expense Report Form.xls","type":"spreadsheet","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B_Cb29svQs3nRV9RUlNuRjFNSlZzdGxZYWNndVpFSEJiYy04","name":"bmosier_expenses.pdf","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0B_Cb29svQs3nVGNhTlVJS25mV0V2TVR1Ukg2cW8wVzRXOXdV","name":"Expense Report Form.xls","type":"file","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"15bo9hQwD62DwVb9SXH-blCd7HLCVYEx67xsA7Jeqllk","name":"Travel Info","type":"document","score":0.01},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""},{"data":{"id":"0APCb29svQs3nUk9PVA","name":"My Drive","type":"folder","score":0.0},"group":"nodes","removed":false,"selected":false,"selectable":true,"locked":false,"grabbed":false,"grabbable":true,"classes":""}
  var params = {
    name: 'cola',
    nodeSpacing: 5,
    edgeLengthVal: 10,
    animate: true,
    randomize: true,
    maxSimulationTime: 1500,
    flow: null,
  };
  var layout = makeLayout();
  var running = false;

  cy.on('layoutstart', function(){
    running = true;
  }).on('layoutstop', function(){
    running = false;
  });

  layout.run();

  var $config = $('#config');
  var $btnParam = $('<div class="param"></div>');
  $config.append( $btnParam );

  var sliders = [
    {
      label: 'Edge length',
      param: 'edgeLengthVal',
      min: 1,
      max: 200
    },

    {
      label: 'Node spacing',
      param: 'nodeSpacing',
      min: 1,
      max: 50
    }
  ];

  var buttons = [
    {
      label: '<i class="fa fa-random"></i>',
      layoutOpts: {
        randomize: true,
        flow: null
      }
    },

    {
      label: '<i class="fa fa-cab"></i>',
      layoutOpts: {
      	randomize: true,
        flow: {axis: 'x', minSeparation: 10 }
      }
    },
    {
      label: '<i class="fa fa-long-arrow-down"></i>',
      layoutOpts: {
        flow: { axis: 'y', minSeparation: 30 }
      }
    }
  ];

  sliders.forEach( makeSlider );

  buttons.forEach( makeButton );

  function makeLayout( opts ){
    params.randomize = false;
    params.edgeLength = function(e){ return params.edgeLengthVal / e.data('weight'); };

    for( var i in opts ){
      params[i] = opts[i];
    }

    return cy.makeLayout( params );
  }

  function makeSlider( opts ){
    var $input = $('<input></input>');
    var $param = $('<div class="param"></div>');

    $param.append('<span class="label label-default">'+ opts.label +'</span>');
    $param.append( $input );

    $config.append( $param );

    var p = $input.slider({
      min: opts.min,
      max: opts.max,
      value: params[ opts.param ]
    }).on('slide', _.throttle( function(){
      params[ opts.param ] = p.getValue();

      layout.stop();
      layout = makeLayout();
      layout.run();
    }, 16 ) ).data('slider');
  }

  function makeButton( opts ){
    var $button = $('<button class="btn btn-default">'+ opts.label +'</button>');

    $btnParam.append( $button );

    $button.on('click', function(){
      layout.stop();

      if( opts.fn ){ opts.fn(); }

      layout = makeLayout( opts.layoutOpts );
      layout.run();
    });
  }

  cy.nodes().forEach(function(n){
    var g = n.data('name');
    var doc_id = n.data('id');

    n.qtip({
      content: [
        {
          name: g,
          url: 'https://drive.google.com/drive/folders/' + doc_id
        }

      ].map(function( link ){
        return '<a target="_blank" href="' + link.url + '">' + link.name + '</a>';
      }).join('<br />\n'),
      position: {
        my: 'top center',
        at: 'bottom center'
      },
      style: {
        classes: 'qtip-bootstrap',
        tip: {
          width: 16,
          height: 8
        }
      }
    });
  });

  $('#config-toggle').on('click', function(){
    $('body').toggleClass('config-closed');

    cy.resize();
  });

}); // on dom ready

$(function() {
  FastClick.attach( document.body );
});
