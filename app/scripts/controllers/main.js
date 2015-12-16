'use strict';

/**
 * @ngdoc function
 * @name levelgeeksFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the levelgeeksFrontendApp
 */
angular.module('levelgeeksApp')
  .controller('MainCtrl', function ($scope,SessionService,USER_ROLES,AuthService) {
    $scope.user = {};
    $scope.user.id = sessionStorage.removeItem('user_id');
    $scope.user.username = sessionStorage.removeItem('username');
    $scope.user.email = sessionStorage.removeItem('email');
    $scope.user.role = sessionStorage.removeItem('user_role');
    $scope.userRoles = USER_ROLES;
    $scope.isAuthorized = AuthService.isAuthorized;

    $scope.logout = function (){
      SessionService.destroy();
      $state.go('login');
    }

  });
