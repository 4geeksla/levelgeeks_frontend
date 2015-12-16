'use strict';

/**
 * @ngdoc overview
 * @name levelgeeksFrontendApp
 * @description
 * # levelgeeksFrontendApp
 *
 * Main module of the application.
 */

var baseUrl = "http://localhost:1337/";

angular
  .module('levelgeeksApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.materialize',
    'toastr'
  ])
  .value('baseUrl',baseUrl)
  .constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })
  .constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    player: 'player'
  })
  .config( ['$httpProvider', function($httpProvider,$http, $location){
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push(['$q', '$window','$location',
      function($q, $window,$location){
        return {
          request: function(config) {
            config.headers = config.headers || {};
            if (localStorage.getItem('token')) {
              config.headers["Authorization"] = localStorage.getItem('token');
            }
            return config;
          },
          response: function(response) {
            return response || $q.when(response);
          },
          responseError: function(rejection){
            if(rejection.status === 401 || rejection.status === 403){
              $location.path('/login');
            }
            return $q.reject(rejection);
          }
        };
      }
    ]);
  }]);
