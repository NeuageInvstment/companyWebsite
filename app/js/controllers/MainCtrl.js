angular.module('nuageInvestment').controller('MainCtrl', ['$scope', 'LanguageDataService',
    function($scope, LanguageDataService) {
        'use strict';

        $scope.scroll = 0; 
        $scope.translate = function(key) {
            LanguageDataService.setLanguage(key);
        };

        $scope.selectedLanguage = function(key) {
            return LanguageDataService.getSelectedLanguage() === key;
        };

        $scope.map = { 
            center: { 
                latitude: 42.3494107, 
                longitude: -71.2242629 
            }, 
            zoom: 17
        };
        
        $scope.marker = {
            id: 0,
            coords : {
                latitude: 42.349445,
                longitude: -71.222065
            }
        };

    }]);