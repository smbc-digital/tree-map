import { tpoPopup, conservationPopup, planappPopup } from './Popups'
import { tpoStyle, conservationStyle, planappStyle, proposedtpoStyle, revokedtpoStyle} from './Styles'

const Configuration = {
    Map: {
        StartingLatLng: [53.404056,-2.154329],
        StartingZoom: 17,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: true,
        DisplayStreets: true,
        EnableAddressSearch: true,
        EnableLocateControl: true
    },
    DynamicData: 
    [
        {
            key: 'Tree Preservation Orders',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_merged&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: tpoPopup,
                maxZoom: 2,
                style: tpoStyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'TPO - Proposed',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_proposed&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: tpoPopup,
                maxZoom: 2,
                style: proposedtpoStyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'TPO - Revoked',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tpo_revoked&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: tpoPopup,
                maxZoom: 2,
                style: revokedtpoStyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Conservation Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:conservation_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: conservationPopup,
                maxZoom: 2,
                style: conservationStyle
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        {
            key: 'Tree Planning App Last Month',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=tree_plan_apps_1month&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: planappPopup,
                maxZoom: 2,
                style: planappStyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },

        {
            key: 'Tree Planning App Last Year',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tree_plan_apps_1year&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: planappPopup,
                maxZoom: 2,
                style: planappStyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },

        {
            key: 'Tree Planning App Last 3 Years',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=trees:tree_plan_apps_3years&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: planappPopup,
                maxZoom: 2,
                style: planappStyle
            },
            displayOverlay: true,
            visibleByDefault: false
        },

        
        {
            key: 'os1250_line',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 18,
                layers: 'base_maps:os1250_line',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        },
        {
            key: 'os1250_text',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 18,
                layers: 'base_maps:os1250_text',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        }
        
    ],
    StaticData: 
    [
        {
            key: 'boundary',
            url: 'https://spatialgeojson.s3-eu-west-1.amazonaws.com/webmapping/boundary.geojson',
            layerOptions: {
                interactive: false,
                maxZoom: 9,
                style: {
                    color: '#000',
                    weight: 4,
                    opacity: 1,
                    fillColor: '#000',
                    fillOpacity: 0
                }
            }
        }
    ]
}

export default Configuration