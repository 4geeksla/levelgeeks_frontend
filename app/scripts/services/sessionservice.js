/**
 * Created by malfonzo on 15/12/15.
 */
angular.module('levelgeeksApp').service('SessionService', function () {

  this.create = function (credentials) {
    console.log(credentials);
    sessionStorage.setItem('user_id',credentials.user.id);
    sessionStorage.setItem('username',credentials.user.username);
    sessionStorage.setItem('email',credentials.user.role);
    sessionStorage.setItem('user_role',credentials.user.role);
    sessionStorage.setItem('user_token',credentials.token);
  };

  this.destroy = function () {
    sessionStorage.removeItem('user_id');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('user_role');
    sessionStorage.removeItem('user_token');

  };
})
