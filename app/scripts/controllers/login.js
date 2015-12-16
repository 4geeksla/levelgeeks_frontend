'use strict';

/**
 * @ngdoc function
 * @name levelgeeksFrontendApp.controller:LoginCtrl
 * @description
 * # MainCtrl
 * Controller of the levelgeeksFrontendApp
 */
angular.module('levelgeeksApp')
  .controller('LoginCtrl', function ($scope, $http, $state,AuthService,AUTH_EVENTS,toastr) {

    $scope.user = {};
    $scope.login = function() {
      AuthService.login($scope.user).then(function(res){
        $scope.$broadcast(AUTH_EVENTS.loginSuccess);
        $state.go('main');
      },function(error){
        toastr.error(error.data.err,'Error');
        $scope.$broadcast(AUTH_EVENTS.loginFailed);
      });
    }
  });
