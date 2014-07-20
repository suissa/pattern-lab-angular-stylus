'use strict';


// Declare app level module which depends on filters, and services
angular.module('PatternLab', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'myApp.atoms'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pattern-lab', {templateUrl: 'views/index.html'});
  $routeProvider.when('/settings', {templateUrl: 'views/settings.html'});
  $routeProvider.when('/atoms', {templateUrl: 'views/atoms.html'});
  $routeProvider.when('/molecules', {templateUrl: 'views/molecules.html'});
  $routeProvider.when('/organisms', {templateUrl: 'views/organisms.html'});
  $routeProvider.when('/templates', {templateUrl: 'views/templates.html'});
  $routeProvider.when('/pages', {templateUrl: 'views/pages.html'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
