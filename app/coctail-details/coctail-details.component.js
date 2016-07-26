'use strict';

angular.module('coctailDetails').
  component('coctailDetails', {
    templateUrl: 'coctail-details/coctail-details.template.html',
    controller: [ '$http', 'ngRoute',
      function CoctailDetailsController($http, $routeParams) {
        var self = this;
        $http.get('coctails/' + $routeParams.coctailId + '.json').then(function(response) {
          self.coctail = response.data;
        });
      }
    ]
  });
