'use strict';

/**
 * @ngdoc function
 * @name levelgeeksFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the levelgeeksFrontendApp
 */


angular.module('levelgeeksApp').controller('DevelopersCtrl', function ($scope, $servicios) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.developer = {};
    $scope.error = false;

    $scope.createDeveloper = function() {

    }

    $scope.editDeveloper = function() {
    }

    $scope.viewDeveloper = function() {

    }

    $scope.saveDeveloper = function(form) {
    	console.log(form);
    	console.log($scope.developer);
    }
});
