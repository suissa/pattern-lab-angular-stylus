'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  service('AngularLoad', ['$document', '$q', '$timeout', function ($document, $q, $timeout) {
    return {
      loadCSS: function (href, $document, $q, $timeout) {
        console.log('loadCss', href);
        var deferred = $q.defer();
        var style = $document[0].createElement('link');
        style.rel = 'stylesheet';
        style.type = 'text/css';
        style.href = href;
        style.onload = function (e) {
          $timeout(function () {
            deferred.resolve(e);
          });
        };
        style.onerror = function (e) {
          $timeout(function () {
            deferred.reject(e);
          });
        };
        $document[0].head.appendChild(style);
        return deferred.promise;
      },
      loadScript: function (src, $document, $q, $timeout) {
        var deferred = $q.defer();
        var script = $document[0].createElement('script');
        script.onload = function (e) {
          $timeout(function () {
            deferred.resolve(e);
          });
        };
        script.onerror = function (e) {
          $timeout(function () {
            deferred.reject(e);
          });
        };
        script.src = src;
        $document[0].body.appendChild(script);
        return deferred.promise;
      }
    };
  }]);
