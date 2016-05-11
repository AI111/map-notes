/**
 * MapLayer model events
 */

'use strict';

import {EventEmitter} from 'events';
import MapLayer from './map-layer.model';
var MapLayerEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MapLayerEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  MapLayer.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MapLayerEvents.emit(event + ':' + doc._id, doc);
    MapLayerEvents.emit(event, doc);
  }
}

export default MapLayerEvents;
