var app = angular.module('nuageInvestment', [
    'ui.router',
    'pascalprecht.translate',
    'Arcus.Config'
])


    .config(['$stateProvider', '$urlRouterProvider' , '$translateProvider', function($stateProvider, $urlRouterProvider, $translateProvider) {
        'use strict';

        $translateProvider.useStaticFilesLoader({
            prefix: 'localization/locale-',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en_US');
    }])


    .run(['$rootScope', function($rootScope) {
        'use strict';


    }]);
