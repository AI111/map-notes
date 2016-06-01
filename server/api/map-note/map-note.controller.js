/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/map-notes              ->  index
 * POST    /api/map-notes              ->  create
 * GET     /api/map-notes/:id          ->  show
 * PUT     /api/map-notes/:id          ->  update
 * DELETE  /api/map-notes/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import MapNote from './map-note.model';
import GeoJSON from 'mongoose-geojson-schema';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    if(updates.drawObjects) console.log('updates',JSON.stringify(updates.drawObjects));
    if(entity.drawObjects) console.log('entity',JSON.stringify(entity.drawObjects));
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        if(updated.drawObjects)
        console.log('updated',JSON.stringify(updated.drawObjects));
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of MapNotes
export function index(req, res) {
  return MapNote.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single MapNote from the DB
export function show(req, res) {
  return MapNote.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new MapNote in the DB
export function create(req, res) {
  return MapNote.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing MapNote in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  console.log(JSON.stringify(req.body));
  // return MapNote.findById(req.params.id).exec()
  //   .then(handleEntityNotFound(res))
  //   .then(saveUpdates(req.body))
  //   .then(respondWithResult(res))
  //   .catch(handleError(res));
  MapNote.findByIdAndUpdate(req.params.id, req.body , function (err, thing) {
    if (err) { return handleError(res, err); }
    if(!thing) { return res.status(404).send('Not Found');}
    res.json(req.body);
  });
}

// Deletes a MapNote from the DB
export function destroy(req, res) {
  return MapNote.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
