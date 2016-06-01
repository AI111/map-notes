'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var mapNoteCtrlStub = {
  index: 'mapNoteCtrl.index',
  show: 'mapNoteCtrl.show',
  create: 'mapNoteCtrl.create',
  update: 'mapNoteCtrl.update',
  destroy: 'mapNoteCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var mapNoteIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './map-note.controller': mapNoteCtrlStub
});

describe('MapNote API Router:', function() {

  it('should return an express router instance', function() {
    mapNoteIndex.should.equal(routerStub);
  });

  describe('GET /api/map-notes', function() {

    it('should route to mapNote.controller.index', function() {
      routerStub.get
        .withArgs('/', 'mapNoteCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/map-notes/:id', function() {

    it('should route to mapNote.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'mapNoteCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/map-notes', function() {

    it('should route to mapNote.controller.create', function() {
      routerStub.post
        .withArgs('/', 'mapNoteCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/map-notes/:id', function() {

    it('should route to mapNote.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'mapNoteCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/map-notes/:id', function() {

    it('should route to mapNote.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'mapNoteCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/map-notes/:id', function() {

    it('should route to mapNote.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'mapNoteCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
