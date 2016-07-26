'use strict';

angular.module('barApp', [
  'ngRoute',
  'coctailList',
  'coctailDetails', ]).
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $routeProvider.
        when('/coctails', {
          template: '<coctail-list></coctail-list>'
        }).
        when('/coctails/:coctailId', {
          template: '<coctail-details></coctail-details>'
        }).
        otherwise('/coctails');

    }
  ]);
