'use strict';

angular.module('coctailList').
  component('coctailList', {
    templateUrl: '/coctail-list/coctail-list.template.html',
    controller: function CoctailsListController($http) {
      var self = this;
      self.orderProp = 'id';

      $http.get('coctails/coctails.json').then(function(response) {
        self.coctails = response.data;
      });
    }
  });
