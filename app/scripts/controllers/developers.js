'use strict';

/**
 * @ngdoc function
 * @name levelgeeksFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the levelgeeksFrontendApp
 */
angular.module('levelgeeksFrontendApp')
  .controller('DevelopersCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.iniciarSesion = function() {

    }
  });
