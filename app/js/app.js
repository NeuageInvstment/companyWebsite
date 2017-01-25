var app = angular.module('nuageInvestment', [
    'ngCookies',
    'ui.router',
    'pascalprecht.translate',
    'Arcus.Config',
    'arcus.utilities',
    'ngNotify'
])


    .config(['$stateProvider', '$urlRouterProvider' , '$translateProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $translateProvider, $locationProvider) {
        'use strict';

        $translateProvider.useStaticFilesLoader({
            prefix: 'localization/locale-',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('cn-simplified');
        $translateProvider.useSanitizeValueStrategy(null);

        $locationProvider.html5Mode(true);
    }])


    .run(['$rootScope', function($rootScope) {
        'use strict';
        $rootScope.selectLanguage = 'cn-simplified';
    }]);
