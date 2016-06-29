/**
 * the first running app for angularJs
 */
(function (angular) {
  'use strict'
  angular
    .module('trendMicroApp', [
      'ngAnimate',
      'ngAria',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/login/index.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .when('/login',{
          templateUrl:'views/login/index.html',
          controller:'LoginCtrl'
        })
        .when('/dashboard')
        .otherwise({
          redirectTo: '/'
        });
    });
})(angular);

