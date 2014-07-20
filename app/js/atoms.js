'use strict';

/* Atoms */

angular.module('myApp.atoms', []).
  directive('atomInputText', ['$document', '$q', '$timeout', 'AngularLoad', function ($document, $q, $timeout, AngularLoad) {
    var name = 'atom-input-text';
    return {
      restrict: 'E',
      templateUrl: 'views/atoms/'+name+'.html?'+Date.now(),
      // template: '<input type="text" class="atom-input-text">',
      link: function (scope, elm, attrs, ctrl) {
        var path = 'css/atoms/'+name+'.css';
        AngularLoad.loadCSS(path, $document, $q, $timeout);
      }
    };
  }]);
  // directive('atomInputText', ['$document', '$q', '$timeout', function ($document, $q, $timeout) {
  //   var name = 'atom-input-text';
  //   return {
  //     restrict: 'AE',
  //     templateUrl: 'views/atoms/'+name+'.html',
  //     link: function (scope, iElement, iAttrs) {
  //       var path = 'css/atoms/'+name+'.css';
  //       loadCSS(path, $document, $q, $timeout);
  //     }
  //   };
  // }]).
  // directive('atomInputLogin', ['$document', '$q', '$timeout', function ($document, $q, $timeout) {
  //   var name = 'atom-input-login';
  //   return {
  //     restrict: 'AE',
  //     templateUrl: 'views/atoms/'+name+'.html',
  //     link: function (scope, iElement, iAttrs) {
  //       var path = 'css/atoms/'+name+'.css';
  //       // loadCSS(path, $document, $q, $timeout);
  //     }
  //   };
  // }]).
  // directive('atomInputCpf', ['$document', '$q', '$timeout', function ($document, $q, $timeout) {
  //   var name = 'atom-input-cpf';
  //   return {
  //     restrict: 'AE',
  //     tranclude: true,
  //     scope: {
  //       ngModel: '=',
  //     },
  //     templateUrl: 'views/atoms/'+name+'.html',
  //     // template: 'POOOORRRAA',
  //     link: function (scope, elm, attrs, ctrl)  {
  //       console.log(attrs);
  //       var path = 'css/atoms/'+name+'.css';
  //       // loadCSS(path, $document, $q, $timeout);
  //       var pattern = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
  //       scope.$watch('ngModel', function(newVal, oldVal) {
  //         console.log('cpf: ', newVal);
  //       });

  //     }
  //   };
  // }]).
  // directive('atomButton', ['$document', '$q', '$timeout', function ($document, $q, $timeout) {
  //   var name = 'atom-button';
  //   return {
  //     restrict: 'AE',
  //     templateUrl: 'views/atoms/'+name+'.html',
  //     link: function (scope, iElement, iAttrs) {
  //       var path = 'css/atoms/'+name+'.css';
  //       // loadCSS(path, $document, $q, $timeout);
  //     }
  //   };
  // }]);