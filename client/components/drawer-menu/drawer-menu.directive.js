'use strict';

angular.module('mapNotesApp')
  .directive('drawermenu', function () {
    return {
      templateUrl: 'components/drawer-menu/drawer-menu.html',
      restrict: 'E',
      controller: 'DrawerMenuController',
      controllerAs: 'drawer',
      link: function (scope, element, attrs) {
      }
    };
  });
