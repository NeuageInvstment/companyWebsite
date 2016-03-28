angular.module('nuageInvestment').controller('ContactCtrl', ['$scope', 'ContactDataService', 'ngNotify',
    function($scope, ContactDataService, ngNotify) {
        'use strict';

        $scope.telephone = "+1(617)678 3889";
        $scope.email = "info@nuageinvrealty.com";

        $scope.sendMessage = function() {

            var message = {
                name: this.messagnerName,
                email: this.messagnerEmail,
                message: this.messangerMessage
            };

            ContactDataService.sendMessage(message)
                .then(function(){
                    ngNotify.set('Email submitted successfully', {
                        type: 'success',
                        position: 'top',
                        duration: 3000
                    });
                }, function(){
                    ngNotify.set('Failed to submit Email. Please contact try again later.', {
                        type: 'error',
                        position: 'top',
                        duration: 3000
                    });
                });

        }


    }]);
