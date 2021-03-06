'use strict';

import mongoose from 'mongoose';

var LocationObjectSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('LocationObject', LocationObjectSchema);
