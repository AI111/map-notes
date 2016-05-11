'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var mapLayerCtrlStub = {
  index: 'mapLayerCtrl.index',
  show: 'mapLayerCtrl.show',
  create: 'mapLayerCtrl.create',
  update: 'mapLayerCtrl.update',
  destroy: 'mapLayerCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var mapLayerIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './map-layer.controller': mapLayerCtrlStub
});

describe('MapLayer API Router:', function() {

  it('should return an express router instance', function() {
    mapLayerIndex.should.equal(routerStub);
  });

  describe('GET /api/map-layers', function() {

    it('should route to mapLayer.controller.index', function() {
      routerStub.get
        .withArgs('/', 'mapLayerCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/map-layers/:id', function() {

    it('should route to mapLayer.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'mapLayerCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/map-layers', function() {

    it('should route to mapLayer.controller.create', function() {
      routerStub.post
        .withArgs('/', 'mapLayerCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/map-layers/:id', function() {

    it('should route to mapLayer.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'mapLayerCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/map-layers/:id', function() {

    it('should route to mapLayer.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'mapLayerCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/map-layers/:id', function() {

    it('should route to mapLayer.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'mapLayerCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
