'use strict';

/**
 * @ngdoc function
 * @name levelgeeksFrontendApp.controller:LoginCtrl
 * @description
 * # MainCtrl
 * Controller of the levelgeeksFrontendApp
 */
angular.module('levelgeeksFrontendApp')
  .controller('LoginCtrl', function ($scope, $http, $state) {

    $scope.user = {};
    $scope.login = function() {
    		var request = {
    			  email:$scope.user.email,
            password:$scope.user.password
    		};
    		$http({
                method:'post',
                url:baseUrl+'auth',
                data:request
        }).success(function(data){
          console.log(data);
			  }).error(function(data){ // errores http 403, 501, 500, 404,
          console.log(data);
			  });
		}
  });
