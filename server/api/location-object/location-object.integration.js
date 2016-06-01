'use strict';

var app = require('../..');
import request from 'supertest';

var newLocationObject;

describe('LocationObject API:', function() {

  describe('GET /api/location-objects', function() {
    var locationObjects;

    beforeEach(function(done) {
      request(app)
        .get('/api/location-objects')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          locationObjects = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      locationObjects.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/location-objects', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/location-objects')
        .send({
          name: 'New LocationObject',
          info: 'This is the brand new locationObject!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newLocationObject = res.body;
          done();
        });
    });

    it('should respond with the newly created locationObject', function() {
      newLocationObject.name.should.equal('New LocationObject');
      newLocationObject.info.should.equal('This is the brand new locationObject!!!');
    });

  });

  describe('GET /api/location-objects/:id', function() {
    var locationObject;

    beforeEach(function(done) {
      request(app)
        .get('/api/location-objects/' + newLocationObject._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          locationObject = res.body;
          done();
        });
    });

    afterEach(function() {
      locationObject = {};
    });

    it('should respond with the requested locationObject', function() {
      locationObject.name.should.equal('New LocationObject');
      locationObject.info.should.equal('This is the brand new locationObject!!!');
    });

  });

  describe('PUT /api/location-objects/:id', function() {
    var updatedLocationObject;

    beforeEach(function(done) {
      request(app)
        .put('/api/location-objects/' + newLocationObject._id)
        .send({
          name: 'Updated LocationObject',
          info: 'This is the updated locationObject!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedLocationObject = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedLocationObject = {};
    });

    it('should respond with the updated locationObject', function() {
      updatedLocationObject.name.should.equal('Updated LocationObject');
      updatedLocationObject.info.should.equal('This is the updated locationObject!!!');
    });

  });

  describe('DELETE /api/location-objects/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/location-objects/' + newLocationObject._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when locationObject does not exist', function(done) {
      request(app)
        .delete('/api/location-objects/' + newLocationObject._id)
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
