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
        
        var label = {
            address : 'Nuage Investment Realty',
            anchor: '-15 12',
            style: 'marker-labels'
        } 

        $scope.marker = {
            id: 0,
            coords : {
                latitude: 42.349445,
                longitude: -71.222065
            },
            options: {
                labelContent: label.address,
                labelAnchor: label.anchor,
                labelClass: label.style,
                labelVisible: true
            }
        };

    }]);