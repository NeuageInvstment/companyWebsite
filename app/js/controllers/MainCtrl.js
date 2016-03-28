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


    }]);