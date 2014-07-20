'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.when('/pattern-lab', {templateUrl: 'views/index.html', controller: 'MyCtrl2'});
  $routeProvider.when('/settings', {templateUrl: 'views/settings.html', controller: 'MyCtrl2'});
  $routeProvider.when('/atoms', {templateUrl: 'views/atoms.html', controller: 'MyCtrl2'});
  $routeProvider.when('/molecules', {templateUrl: 'views/molecules.html', controller: 'MyCtrl2'});
  $routeProvider.when('/organisms', {templateUrl: 'views/organisms.html', controller: 'MyCtrl2'});
  $routeProvider.when('/templates', {templateUrl: 'views/templates.html', controller: 'MyCtrl2'});
  $routeProvider.when('/pages', {templateUrl: 'views/pages.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
