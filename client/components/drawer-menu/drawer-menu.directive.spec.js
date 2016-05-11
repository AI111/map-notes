'use strict';

describe('Directive: drawerMenu', function () {

  // load the directive's module and view
  beforeEach(module('mapNotesApp.drawer-menu'));
  beforeEach(module('components/drawer-menu/drawer-menu.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<drawer-menu></drawer-menu>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the drawerMenu directive');
  }));
});
