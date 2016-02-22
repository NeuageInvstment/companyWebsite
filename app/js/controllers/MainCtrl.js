angular.module('nuageInvestment').controller('MainCtrl', ['$scope', '$http', 'LanguageDataService',
    function($scope,$http, LanguageDataService) {
        'use strict';

        $scope.scroll = 0; 
        $scope.translate = function(key) {
            LanguageDataService.setLanguage(key);
        };

        $scope.selectedLanguage = function(key) {
            return LanguageDataService.getSelectedLanguage() === key;
        };

        $scope.telephone = "+1(617)678 3889";
        $scope.email = "info@nuageinvrealty.com";

        $scope.sendMessage = function() {
            
            var message = {
                name: this.messagnerName,
                email: this.messagnerEmail,
                message: this.messangerMessage
            };


           $http.post('/contact', message)
               .success(function(data, status){
                   
               });
        }


    }]);