angular.module('nuageInvestment').controller('MainCtrl', ['$scope', 'LanguageDataService', 'TELEPHONE', 'EMAIL',
    function($scope, LanguageDataService, TELEPHONE, EMAIL) {
        'use strict';

        $scope.scroll = 0; 
        $scope.translate = function(key) {
            LanguageDataService.setLanguage(key);
        };

        $scope.selectedLanguage = function(key) {
            return LanguageDataService.getSelectedLanguage() === key;
        };

        $scope.telephone = TELEPHONE;
        $scope.email = EMAIL;

    }]);