/**
 * MapNote model events
 */

'use strict';

import {EventEmitter} from 'events';
import MapNote from './map-note.model';
var MapNoteEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MapNoteEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  MapNote.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MapNoteEvents.emit(event + ':' + doc._id, doc);
    MapNoteEvents.emit(event, doc);
  }
}

export default MapNoteEvents;
