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
        
    }]);