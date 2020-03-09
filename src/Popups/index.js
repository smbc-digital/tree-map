const Land_Ownership_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Land Ownership</p>
    <p></p>
    <p class="info">Committee: ${feature.properties.committee_new}</p>
    <p class="info">Title Number: ${feature.properties.titlenumber}</p>
    </div>`
  layer.bindPopup(content)
}
const Leases_Popup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-tree" aria-hidden="true"></i><p class="title">Leases</p>
    <p></p>
    <p class="info">Description: ${feature.properties.description}</p>
    </div>`
  layer.bindPopup(content)
}

export {
  Land_Ownership_Popup,
  Leases_Popup
}