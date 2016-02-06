var app = angular.module('nuageInvestment', [
    'ngCookies',
    'ui.router',
    'pascalprecht.translate',
    'Arcus.Config',
    'uiGmapgoogle-maps'
])


    .config(['$stateProvider', '$urlRouterProvider' , '$translateProvider', 'uiGmapGoogleMapApiProvider', function($stateProvider, $urlRouterProvider, $translateProvider, uiGmapGoogleMapApiProvider) {
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


    }]);
