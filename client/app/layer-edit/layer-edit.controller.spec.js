'use strict';

describe('Component: LayerEditComponent', function () {

  // load the controller's module
  beforeEach(module('mapNotesApp'));

  var LayerEditComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    LayerEditComponent = $componentController('LayerEditComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
