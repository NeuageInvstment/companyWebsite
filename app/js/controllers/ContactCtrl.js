angular.module('nuageInvestment').controller('ContactCtrl', ['$scope', 'ContactDataService', 'ngNotify', '$sce', 'GMAP_API',
    function($scope, ContactDataService, ngNotify, $sce, GMAP_API) {
        'use strict';

        $scope.telephone = "+1(617)678 3889";
        $scope.email = "info@nuageinvrealty.com";

        $scope.sendMessage = function() {

            var message = {
                name: this.messagnerName,
                email: this.messagnerEmail,
                message: this.messangerMessage
            };

        };

        $scope.bostonOffice = $sce.trustAsResourceUrl('https://www.google.com/maps/embed/v1/place?key='+ GMAP_API +'&q=810+Memorial+Dr+%23106,+Cambridge,+MA+02139');
        $scope.newYorkOffice = $sce.trustAsResourceUrl('https://www.google.com/maps/embed/v1/place?key='+ GMAP_API +'&q=745+5th+Ave+%23505,+New+York,+NY+10151');


    }]);
