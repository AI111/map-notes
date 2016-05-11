'use strict';

angular.module('mapNotesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('map-note', {
        url: '/map-note',
        template: '<map-note></map-note>'
      });
  });
