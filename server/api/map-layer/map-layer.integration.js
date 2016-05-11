'use strict';

var app = require('../..');
import request from 'supertest';

var newMapLayer;

describe('MapLayer API:', function() {

  describe('GET /api/map-layers', function() {
    var mapLayers;

    beforeEach(function(done) {
      request(app)
        .get('/api/map-layers')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          mapLayers = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      mapLayers.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/map-layers', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/map-layers')
        .send({
          name: 'New MapLayer',
          info: 'This is the brand new mapLayer!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMapLayer = res.body;
          done();
        });
    });

    it('should respond with the newly created mapLayer', function() {
      newMapLayer.name.should.equal('New MapLayer');
      newMapLayer.info.should.equal('This is the brand new mapLayer!!!');
    });

  });

  describe('GET /api/map-layers/:id', function() {
    var mapLayer;

    beforeEach(function(done) {
      request(app)
        .get('/api/map-layers/' + newMapLayer._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          mapLayer = res.body;
          done();
        });
    });

    afterEach(function() {
      mapLayer = {};
    });

    it('should respond with the requested mapLayer', function() {
      mapLayer.name.should.equal('New MapLayer');
      mapLayer.info.should.equal('This is the brand new mapLayer!!!');
    });

  });

  describe('PUT /api/map-layers/:id', function() {
    var updatedMapLayer;

    beforeEach(function(done) {
      request(app)
        .put('/api/map-layers/' + newMapLayer._id)
        .send({
          name: 'Updated MapLayer',
          info: 'This is the updated mapLayer!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMapLayer = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMapLayer = {};
    });

    it('should respond with the updated mapLayer', function() {
      updatedMapLayer.name.should.equal('Updated MapLayer');
      updatedMapLayer.info.should.equal('This is the updated mapLayer!!!');
    });

  });

  describe('DELETE /api/map-layers/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/map-layers/' + newMapLayer._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when mapLayer does not exist', function(done) {
      request(app)
        .delete('/api/map-layers/' + newMapLayer._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
