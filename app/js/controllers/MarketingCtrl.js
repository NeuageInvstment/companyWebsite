angular.module('nuageInvestment').controller('MarketingCtrl', ['$scope', 'LanguageDataService',
    function($scope, LanguageDataService) {
        'use strict';

        $scope.translate = function(key) {
            LanguageDataService.setLanguage(key);
        };

        $scope.selectedLanguage = function(key) {
            return LanguageDataService.getSelectedLanguage() === key;
        };


    }]);
