const tpoPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fas fa-tree smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Tree Preservation Order</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Reference: ${feature.properties.tpo_number}</p>
      <p>Tree Number: ${feature.properties.tree_number}</p>
      <p>Name: ${feature.properties.tpo_name}</p>
      <p>Species: ${feature.properties.tree_species}</p>
      <p>Status: ${feature.properties.status}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const conservationPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="fa fa-home smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Conservation Area</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Name: ${feature.properties.cons_area}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

 const planappPopup = (feature, layer) => {
  
  const content = `<div class="smbc-map__item">
    <div class="smbc-map__item__header__block">
      <i class="far fa-map smbc-map__item__header__block__icon" aria-hidden="true"></i>
      <span class="smbc-map__item__header__block__title">Tree Planning App</span>
    </div>
    <div class="smbc-map__item__body">
      <p>Reference: ${feature.properties.refval}</p>
      <p>Proposal: ${feature.properties.proposal}</p>
      <p>Address: ${feature.properties.address}</p>
      <p>Received Date: ${feature.properties.received_date}</p>
      <p>Decision: ${feature.properties.decision}</p>
      <p>Decision Date: ${feature.properties.decision_date}</p>
    </div>
  </div>`
 
  layer.bindPopup(content)
 }

export {
  tpoPopup,
  conservationPopup,
  planappPopup
}