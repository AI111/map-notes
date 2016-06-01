'use strict';

var app = require('../..');
import request from 'supertest';

var newMapNote;

describe('MapNote API:', function() {

  describe('GET /api/map-notes', function() {
    var mapNotes;

    beforeEach(function(done) {
      request(app)
        .get('/api/map-notes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          mapNotes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      mapNotes.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/map-notes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/map-notes')
        .send({
          name: 'New MapNote',
          info: 'This is the brand new mapNote!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMapNote = res.body;
          done();
        });
    });

    it('should respond with the newly created mapNote', function() {
      newMapNote.name.should.equal('New MapNote');
      newMapNote.info.should.equal('This is the brand new mapNote!!!');
    });

  });

  describe('GET /api/map-notes/:id', function() {
    var mapNote;

    beforeEach(function(done) {
      request(app)
        .get('/api/map-notes/' + newMapNote._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          mapNote = res.body;
          done();
        });
    });

    afterEach(function() {
      mapNote = {};
    });

    it('should respond with the requested mapNote', function() {
      mapNote.name.should.equal('New MapNote');
      mapNote.info.should.equal('This is the brand new mapNote!!!');
    });

  });

  describe('PUT /api/map-notes/:id', function() {
    var updatedMapNote;

    beforeEach(function(done) {
      request(app)
        .put('/api/map-notes/' + newMapNote._id)
        .send({
          name: 'Updated MapNote',
          info: 'This is the updated mapNote!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMapNote = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMapNote = {};
    });

    it('should respond with the updated mapNote', function() {
      updatedMapNote.name.should.equal('Updated MapNote');
      updatedMapNote.info.should.equal('This is the updated mapNote!!!');
    });

  });

  describe('DELETE /api/map-notes/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/map-notes/' + newMapNote._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when mapNote does not exist', function(done) {
      request(app)
        .delete('/api/map-notes/' + newMapNote._id)
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
