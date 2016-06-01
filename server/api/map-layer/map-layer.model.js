'use strict';

import mongoose from 'mongoose';
import GeoJSON from 'mongoose-geojson-schema';

var MapLayerSchema = new mongoose.Schema({
  name: String,
  active: Boolean,
  lvl: Number,
  drawObjects:mongoose.Schema.Types.FeatureCollection
});

export default mongoose.model('MapLayer', MapLayerSchema);
