import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import Sketch from '@arcgis/core/widgets/Sketch';
import './style.css';

const map = new Map({
    basemap: 'streets',
})

const view = new MapView({
    container: 'viewDiv',
    map,
    zoom: 13,
    center: [-122.849, 49.1913]
});
