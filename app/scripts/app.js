'use strict';

/**
 * @ngdoc overview
 * @name levelgeeksFrontendApp
 * @description
 * # levelgeeksFrontendApp
 *
 * Main module of the application.
 */

var baseUrl = "http://odoo.geekies.co:8010";

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
  .value('baseUrl',baseUrl)
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
