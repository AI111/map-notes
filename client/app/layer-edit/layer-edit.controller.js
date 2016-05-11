'use strict';
(function(){

class LayerEditComponent {
  constructor() {
    this.message = 'Hello';
    // this.L =L;
  }
  $onInit() {
    this.initMap();
  }
  initMap(){
    console.log("Init map");
    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      osm = L.tileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib });
    var map = new L.Map('mapid', { layers: [osm], center: new L.LatLng(51.505, -0.04), zoom: 13 }),
      drawnItems = L.featureGroup().addTo(map);
    map.addControl(new L.Control.Draw({
      edit: {
        featureGroup: drawnItems,
        poly: {
          allowIntersection: false
        }
      },
      draw: {
        polygon: {
          allowIntersection: false
        }
      }
    }));
    map.on('draw:created', function(event) {
      var layer = event.layer;
      drawnItems.addLayer(layer);
    });
  }
}

angular.module('mapNotesApp')
  .component('layerEdit', {
    templateUrl: 'app/layer-edit/layer-edit.html',
    controller: LayerEditComponent
  });

})();
