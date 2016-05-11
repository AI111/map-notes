'use strict';

import mongoose from 'mongoose';

var MapLayerSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('MapLayer', MapLayerSchema);
