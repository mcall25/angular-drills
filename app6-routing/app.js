angular.module('app6', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');


    $stateProvider
      .state('home', {
        url: '/',
        controller: 'homeController',
        templateUrl: 'home/home.html'
      })


})
