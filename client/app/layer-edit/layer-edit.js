'use strict';

angular.module('mapNotesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('layer-edit', {
        url: '/layer-edit/:layerID',
        template: '<layer-edit layout="column" class="flex"></layer-edit>'
      });
  });
