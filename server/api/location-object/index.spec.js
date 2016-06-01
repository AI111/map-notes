'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var locationObjectCtrlStub = {
  index: 'locationObjectCtrl.index',
  show: 'locationObjectCtrl.show',
  create: 'locationObjectCtrl.create',
  update: 'locationObjectCtrl.update',
  destroy: 'locationObjectCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var locationObjectIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './location-object.controller': locationObjectCtrlStub
});

describe('LocationObject API Router:', function() {

  it('should return an express router instance', function() {
    locationObjectIndex.should.equal(routerStub);
  });

  describe('GET /api/location-objects', function() {

    it('should route to locationObject.controller.index', function() {
      routerStub.get
        .withArgs('/', 'locationObjectCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/location-objects/:id', function() {

    it('should route to locationObject.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'locationObjectCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/location-objects', function() {

    it('should route to locationObject.controller.create', function() {
      routerStub.post
        .withArgs('/', 'locationObjectCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/location-objects/:id', function() {

    it('should route to locationObject.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'locationObjectCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/location-objects/:id', function() {

    it('should route to locationObject.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'locationObjectCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/location-objects/:id', function() {

    it('should route to locationObject.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'locationObjectCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
