angular.module('nuageInvestment').controller('FooterCtrl', ['$scope', '$rootScope', '$http', '$translate', 'LanguageDataService',
    function($scope, $rootScope, $http, $translate, LanguageDataService) {
        'use strict';
        var current = new Date();
        var chineseIcon = '../../images/cn.png';
        var englishIcon = '../../images/en.png';
        $scope.currentYear = current.getFullYear();
        $scope.languages = [
            { value: 'en_US', name: 'En', icon: englishIcon },
            { value: 'cn-simplified', name: '中文', icon: chineseIcon }
        ];
        $scope.chosedLanguage = '';

        LanguageDataService.getSelectedLanguage()
            .then(function(preselectedLanguage) {
                $scope.chosedLanguage = preselectedLanguage;
            });

        $scope.$watch('chosedLanguage', function(newVal, oldVal) {
            if (newVal && oldVal && oldVal !== newVal) {
              LanguageDataService.setLanguage(newVal);
            }
        })
    }]);
