/* jshint devel:true */

'use strict';

angular.module('app', ['ui.router'])
.controller('navCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.items = [
    {
      path: '/home', 
      title: 'Home',
      icon: 'home'
    },
    {
      path: '/our-pastries', 
      title: 'Our Pastries',
      icon: 'pie-chart'
    },
    {
      path: '/flavors', 
      title: 'Flavors',
      icon: 'spoon-knife'
    }
  ];
  $scope.isActive = function(item) {
    if (item.path === $location.path()) {
      return true;
    }
    return false;
  };
}])
.controller('copyrightCtrl', ['$scope', function($scope) {
  $scope.date = new Date();
}])
.config(['$stateProvider', '$urlRouterProvider', '$uiViewScrollProvider', function($stateProvider, $urlRouterProvider, $uiViewScrollProvider) {
  
  $uiViewScrollProvider.useAnchorScroll();

  //
  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise('/home');
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'partials/home.html'
    })
    .state('our-pastries', {
      url: '/our-pastries',
      templateUrl: 'partials/our-pastries.html'
    })
    .state('flavors', {
      url: '/flavors',
      templateUrl: 'partials/flavors.html'
    });
}]);