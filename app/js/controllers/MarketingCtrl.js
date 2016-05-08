angular.module('nuageInvestment').controller('MarketingCtrl', ['$scope', '$translate', 'LanguageDataService',
    function($scope, $translate, LanguageDataService) {
        'use strict';

        $scope.translate = function(key) {
            LanguageDataService.setLanguage(key);
        };

        $scope.selectedLanguage = function(key) {
            return LanguageDataService.getSelectedLanguage() === key;
        };

        $scope.isLanguageSelected = function(language) {
            return $translate.use() === language;
        };
    }]);
