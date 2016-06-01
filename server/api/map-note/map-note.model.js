'use strict';

import mongoose from 'mongoose';
import GeoJSON from 'mongoose-geojson-schema';
var GeometrySchema = new mongoose.Schema({
  type: String,
  coordinates:[{ type: [ Number ]}]
})
var Geometry= mongoose.model('Geometry', GeometrySchema);

var FeatureSchema = new mongoose.Schema({
  type:String,
  properties: {},
  geometry: GeometrySchema
})
var Feature= mongoose.model('Feature', FeatureSchema);
var FeatureCollectionSchema = new mongoose.Schema({
  type:String,
  features:[FeatureSchema]
})
var FeatureCollection = mongoose.model('FeatureCollection', FeatureCollectionSchema);
var MapNoteSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  latitude: Number,
  longtitude: Number,
  zoomLvl: Number,
  mapResource:String,
  screenUrl: String,
  drawObjects:mongoose.Schema.Types.FeatureCollection

});

export default mongoose.model('MapNote', MapNoteSchema);
