'use strict';

angular.module('mapNotesApp', [
  'mapNotesApp.auth',
  'mapNotesApp.admin',
  'mapNotesApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngMaterial',
  'ngMdIcons',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }).factory('$exceptionHandler', function($log) {
  return function (exception, cause) {
    if (cause) {
      $log.error('exception cause:', cause);
    }
    throw exception;
  };
});
