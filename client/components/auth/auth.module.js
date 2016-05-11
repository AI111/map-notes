'use strict';

angular.module('mapNotesApp.auth', [
  'mapNotesApp.constants',
  'mapNotesApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
