angular.module('nuageInvestment').controller('MainCtrl', ['$scope', '$http', '$translate', 'LanguageDataService',
    function($scope, $http, $translate, LanguageDataService) {
        'use strict';

        $scope.scroll = 0;
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