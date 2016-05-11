'use strict';

describe('Component: MapNoteComponent', function () {

  // load the controller's module
  beforeEach(module('mapNotesApp'));

  var MapNoteComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    MapNoteComponent = $componentController('MapNoteComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
