/**
 * LocationObject model events
 */

'use strict';

import {EventEmitter} from 'events';
import LocationObject from './location-object.model';
var LocationObjectEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
LocationObjectEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  LocationObject.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    LocationObjectEvents.emit(event + ':' + doc._id, doc);
    LocationObjectEvents.emit(event, doc);
  }
}

export default LocationObjectEvents;
