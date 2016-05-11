'use strict';

angular.module('mapNotesApp')
  .directive('drawer-menu', function () {
    return {
      templateUrl: 'components/drawer-menu/drawer-menu.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
