'use strict';

angular.module('mapNotesApp')
  .directive('navbar', function() {
    return {
    templateUrl: 'components/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav',
    link: function(scope, element) {
      element.addClass('navbar');
    }
  };});
