'use strict';

/**
 * @ngdoc function
 * @name levelgeeksFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the levelgeeksFrontendApp
 */
angular.module('levelgeeksFrontendApp')
  .controller('LoginCtrl', function ($scope, $http, $state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.validate = function() {
		$scope.messages.msg = [];
		$scope.error = false;

		if (!$scope.correo) {
			$scope.error = true;
			$scope.messages.msg.push({text: "Introduzca su correo electronico"});
		}

		if(!$scope.pass) {
			$scope.error = true;
			$scope.messages.msg.push({text: "Introduzca su clave"});
		}
	};
    $scope.iniciarSesion = function() {
    	$scope.messages = [];
		$scope.error = false;
    	$scope.validate();
    	if(!$scope.error ){
    		var request = {
    			correo:$scope.correo,
    			password:$scope.pass
    		}

    		$http({method:'post',url:baseUrl+'users/login',data:request}).success(function(data){
				var url;
				var response;

				if(data.token != undefined) {					
					sessionStorage.setItem('Authorization',data.token);
					$state.go('/developers');
				} else {
					$scope.error = true;
					$scope.messages.type="danger";
					$scope.messages.msg.push({text:'Error al inciar sesion'});
				}

			}).error(function(data){ // errores httṕ 403, 501, 500, 404,
				$scope.error = true;
				$scope.messages.type="danger";
				$scope.messages.msg.push({text:"Error al procesar la acción"});
			});
    	}else{
			$scope.messages.type="danger";
		}
    }
  });
