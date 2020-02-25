const tpoPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Tree Preservation Order</p>
  <p></p>
  <p class="info">Reference: ${feature.properties.tpo_number}</p>
  <p class="info">Tree Number: ${feature.properties.tree_number}</p>
  <p class="info">Name: ${feature.properties.tpo_name}</p>
  <p class="info">Species: ${feature.properties.tree_species}</p>
  <p class="info">Status: ${feature.properties.status}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const conservationPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-home" aria-hidden="true"></i><p class="title">Conservation Area</p>
  <p></p>
  <p class="info">Name: ${feature.properties.cons_area}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const planappPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-map-o" aria-hidden="true"></i><p class="title">Tree Planning App</p>
  <p></p>
  <p class="info">Reference: ${feature.properties.refval}</p>
  <p class="info">Proposal: ${feature.properties.proposal}</p>
  <p class="info">Address: ${feature.properties.address}</p>
  <p class="info">Received Date: ${feature.properties.received_date}</p>
  <p class="info">Decision: ${feature.properties.decision}</p>
  <p class="info">Decision Date: ${feature.properties.decision_date}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

export {
  tpoPopup,
  conservationPopup,
  planappPopup
}