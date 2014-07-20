'use strict';

/* Atoms */

angular.module('myApp.atoms', []).
  directive('atomInputText', [function () {
    return {
      restrict: 'AE',
      templateUrl: 'views/atoms/atom-input-text.html',
      link: function (scope, iElement, iAttrs) {
        
      }
    };
  }]).
  directive('atomInputLogin', [function () {
    return {
      restrict: 'AE',
      templateUrl: 'views/atoms/atom-input-login.html',
      link: function (scope, iElement, iAttrs) {
        
      }
    };
  }]).
  directive('atomButton', [function () {
    return {
      restrict: 'AE',
      templateUrl: 'views/atoms/atom-button.html',
      link: function (scope, iElement, iAttrs) {
        
      }
    };
  }]);
