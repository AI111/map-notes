'use strict';
(function(){

  class LayerEditComponent {
    constructor($stateParams,$http) {
      this.layerID=$stateParams.layerID;
      this.message = 'Hello';
      this.$http=$http;
      this.count=0;
      // this.L =L;
      this.layers;
    }

    $onInit() {
      if(this.layerID){
        console.log("layer id",this.layerID);
      }

      this.$http.get('/api/map-notes/'+this.layerID).then(response => {
        console.log("Response ",response.data);
        this.note = response.data;
        this.initMap();
      });


    }
    initMap(){
      console.log("Init map");
      var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        osm = L.tileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib });
      var map = new L.Map('mapid', { layers: [osm], center: new L.LatLng(this.note.latitude, this.note.longtitude), zoom: this.note.zoomLvl,zoomControl: false });
      var drawnItems =new L.FeatureGroup();
      map.addLayer(drawnItems);

      // L.geoJson(this.note.drawObjects, {
      //   onEachFeature: function (feature, layer) {
      //     drawnItems.addLayer(layer);
      //   }
      // });
      this.layers=drawnItems;
      // var geojsonLayer = L.geoJson(this.note.drawObjects);
      // geojsonLayer.eachLayer(
      //   function(l){
      //     drawnItems.addLayer(l);
      //   });

      L.geoJson(this.note.drawObjects, {
        onEachFeature: function (feature, layer) {
          if (layer.getLayers) {
            layer.getLayers().forEach(function (l) {
              featureGroup.addLayer(l);
            })
          } else {
            drawnItems.addLayer(layer);
          }
        }
      });

      // var geojson = L.geoJson(this.note.drawObjects).addTo(map);

      map.addControl(new L.Control.Draw({
        position:'bottomleft',
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
      L.control.zoom({
        position:'bottomleft'
      }).addTo(map);
      map.on('draw:created', function(event) {
        var layer = event.layer;
        drawnItems.addLayer(layer);
        console.log(drawnItems.toGeoJSON());
        console.log(JSON.stringify(drawnItems.toGeoJSON()));
        var type = event.layerType;

      });

    }
    saveGeoData(){
      var data_for_db = JSON.stringify(this.layers.toGeoJSON());
      console.log(data_for_db);
      this.note.drawObjects=this.layers.toGeoJSON();
      this.$http.put('/api/map-notes/'+this.layerID,this.note).then(res=>{
          console.log(res);
      },err=>{
        console.log(err);
      });
    }
  }
  // LayerEditComponent.$inject = ['$routeParams'];
  angular.module('mapNotesApp')
    .component('layerEdit', {
      templateUrl: 'app/layer-edit/layer-edit.html',
      controller: LayerEditComponent
    });

})();
