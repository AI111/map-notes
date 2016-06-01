'use strict';

angular.module('mapNotesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('map-note', {
        url: '/map-note',
        template: '<map-note layout="column"></map-note>'
      });
  });
