'use strict';

angular.module('mapNotesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('layer-edit', {
        url: '/layer-edit',
        template: '<layer-edit></layer-edit>'
      });
  });
