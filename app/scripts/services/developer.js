'use strict';

/**
 * @ngdoc service
 * @name golfitrionFrontendApp.asignaciones
 * @description
 * # asignaciones
 * Service in the golfitrionFrontendApp.
 */
myApp.service('DeveloperService', function($resource,$window) {
   		$window.baseUrl;
		return $resource($window.baseUrl + '/developers/', {}, {
	    crear: {
	      method: 'POST',
	      url: $window.baseUrl + '/developers/'
	    },
	    actualizar: {
	    	method: 'POST',
	    	url: $window.baseUrl + '/developers/:id'
	    },
	    eliminar: {
	    	method: 'DELETE',
	    	url: $window.baseUrl + '/developers/:id'
	    }
  	});
});
