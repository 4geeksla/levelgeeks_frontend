'use strict';

/**
 * @ngdoc overview
 * @name levelgeeksFrontendApp
 * @description
 * # levelgeeksFrontendApp
 *
 * Main module of the application.
 */
var baseUrl = "http://10.10.0.72:8000";

angular
  .module('levelgeeksFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .value('baseUrl',baseUrl);
