var app = angular.module('nuageInvestment', [
    'ngCookies',
    'ui.router',
    'pascalprecht.translate',
    'Arcus.Config',
    'arcus.utilities',
    'ngMaterial',
    'ngNotify'
])


    .config(['$stateProvider', '$urlRouterProvider' , '$translateProvider', function($stateProvider, $urlRouterProvider, $translateProvider) {
        'use strict';

        $translateProvider.useStaticFilesLoader({
            prefix: 'localization/locale-',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('cn-simplified');
        $translateProvider.useSanitizeValueStrategy(null);
    }])


    .run(['$rootScope', function($rootScope) {
        'use strict';


    }]);
