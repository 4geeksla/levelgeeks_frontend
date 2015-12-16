/**
 * Created by malfonzo on 15/12/15.
 */
angular.module('levelgeeksApp').factory('AuthService', function ($http, SessionService) {
  var authService = {};

  authService.login = function (credentials) {
    return $http
      .post(baseUrl+'auth', credentials)
      .then(function (res) {
        SessionService.create(res.data);
        return res.data.user;
      });
  };

  authService.isAuthenticated = function () {
    return !!sessionStorage.getItem('user_id');
  };

  authService.isAuthorized = function (authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (authService.isAuthenticated() &&
      authorizedRoles.indexOf(sessionStorage.getItem('user_role')) !== -1);
  };

  return authService;
});
