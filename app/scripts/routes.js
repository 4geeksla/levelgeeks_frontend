
angular.module('levelgeeksFrontendApp')
.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider,$stateProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
      .state('login', {
        url:'/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('developers', {
        url: '/developers',
        templateUrl: 'views/admin/add_developers.html',
        controller: 'DevelopersCtrl'
      })
      /*.state('main', {
        url:'/main',
        templateUrl: 'views/main.html',
        controller: 'main'
      })
      .state('main.list', {
        url: '/list',
        views: {
          list: {
            templateUrl:'views/list.html',
            controller: 'list'
          }
        }
      })
      .state('main.dashboard', {
        url: '/dashboard',
        views: {
          dashboard: {
            templateUrl:'views/dashboard.html',
            controller: 'dashboard'
          }
        }
      })
      .state('main.dashboard.level', {
        url: '/level',
        views: {
          dashboard: {
            templateUrl:'views/level.html',
            controller: 'level'
          }
        }
      })
      .state('main.dashboard.pivotal_tracker', {
        url: '/pivotaltracker',
        views: {
          dashboard: {
            templateUrl:'views/pivotal_tracker.html',
            controller: 'pivotal_tracker'
          }
        }
      })*/
}]);
