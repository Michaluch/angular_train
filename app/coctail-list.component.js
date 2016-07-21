'use strict';

angular.module('barApp').
  component('coctailList', {
    template: '<ul>' +
                '<li ng-repeat="coctail in $ctrl.coctails">' +
                  '<span>{{coctail.name}}</span>' +
                  '<p>{{coctail.directions}}</p>' +
                '</li>' +
              '</ul>',
    controller: function CoctailsListController() {
      this.coctails = [
        {
          name: 'Old Fashioned',
          directions: 'Pour ingredients into a stainless steel shaker over' +
            ' ice and shake until completely cold. Strain into a large shot' +
            ' or old-fashioned glass and shoot.',
        }, {
          name: 'Jagermonster',
          directions: 'Pour ingredients into a stainless steel shaker over' +
            ' ice and shake until completely cold. Strain into a large shot' +
            ' or old-fashioned glass and shoot.',
        }, {
          name: 'Surfer on Acid',
          directions: 'Pour ingredients into a stainless steel shaker over' +
            ' ice and shake until completely cold. Strain into a large shot' +
            ' or old-fashioned glass and shoot.',
        }, {
          name: 'Alligator on Acid',
          directions: 'Shake Coconut Rum, Melon Schnapps and Pineapple Juice' +
            ' and ice together and strain into large shot glass. Slowly pour' +
            ' Jaegermeister so that it sits on top.',
        }, {
          name: 'Old Fashioned',
          directions: 'Pour ingredients into a stainless steel shaker over' +
            ' ice and shake until completely cold. Strain into a large shot' +
            ' or old-fashioned glass and shoot.',
        }, {
          name: 'Old Fashioned',
          directions: 'Pour ingredients into a stainless steel shaker over' +
            ' ice and shake until completely cold. Strain into a large shot' +
            ' or old-fashioned glass and shoot.',
        },
      ];
    },
  });
