var app = angular.module('nuageInvestment', [
    'ngCookies',
    'ui.router',
    'pascalprecht.translate',
    'Arcus.Config',
    'arcus.utilities',
    'ngNotify',
    'ngMaterial',
    'ngMessages'
])


    .config(['$stateProvider', '$urlRouterProvider' , '$translateProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $translateProvider, $locationProvider) {
        'use strict';

        $translateProvider.useStaticFilesLoader({
            prefix: 'localization/locale-',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en_US');
        $translateProvider.useSanitizeValueStrategy(null);
    }])


    .run(['$rootScope', function($rootScope) {
        'use strict';
        $rootScope.selectLanguage = 'en_US';
    }]);
