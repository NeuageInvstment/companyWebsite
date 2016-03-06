angular.module('nuageInvestment').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        'use strict';



        $urlRouterProvider
            .when('', '/')
            .otherwise('/404');


        $stateProvider

            /* --------------------------------------------------------- */
            /*  404
             /* --------------------------------------------------------- */
            .state('404', {
                url: '/404',
                controller: '404Ctrl',
                templateUrl: '/views/404/root.html',
                onEnter: [function() {

                }]
            })

            /* --------------------------------------------------------- */
            /*  HOME
            /* --------------------------------------------------------- */
            .state('home', {
                abstract: true,
                url: '/',
                data: {
                    // bodyClass: 'nav-fixed-top'
                },
                controller: 'MainCtrl',
                templateUrl: '/views/home/root.html',
                onEnter: [function() {

                }]
            })

                // --------------------------------------------------------- //
                //  HOME - MAIN
                // --------------------------------------------------------- //
                .state('home.main', {
                    url: '',
                    data: {
                        // bodyClass: 'homepage'
                    },
                    templateUrl: '/views/home/main.html',
                    onEnter: [function() {

                    }]
                })

            /* --------------------------------------------------------- */
            /*  MARKETING
            /* --------------------------------------------------------- */
            .state('marketing', {
                abstract: true,
                url: '',
                data: {
                    // bodyClass: 'nav-fixed-top'
                },
                controller: 'MarketingCtrl',
                templateUrl: '/views/marketing/root.html',
                onEnter: [function() {

                }]
            })

                // --------------------------------------------------------- //
                //  MARKETING - SERVICE
                // --------------------------------------------------------- //
                .state('marketing.service', {
                    url: '/service',
                    templateUrl: '/views/marketing/service.html',
                    onEnter: [function() {

                    }]
                })

                    // --------------------------------------------------------- //
                    //  MARKETING - SERVICE - RETAIL
                    // --------------------------------------------------------- //
                    .state('marketing.retail', {
                        url: '/retail',
                        templateUrl: '/views/marketing/retail.html',
                        onEnter: [function() {

                        }]
                    })

                    // --------------------------------------------------------- //
                    //  MARKETING - SERVICE - COMMERCIAL
                    // --------------------------------------------------------- //
                    .state('marketing.commercial', {
                        url: '/commercial',
                        templateUrl: '/views/marketing/commercial.html',
                        onEnter: [function() {

                        }]
                    })

                    // --------------------------------------------------------- //
                    //  MARKETING - SERVICE - COMMERCIAL
                    // --------------------------------------------------------- //
                    .state('marketing.eb-5', {
                        url: '/eb-5',
                        templateUrl: '/views/marketing/eb-5.html',
                        onEnter: [function() {

                        }]
                    })

                // --------------------------------------------------------- //
                //  MARKETING - TEAM
                // --------------------------------------------------------- //
                .state('marketing.team', {
                    url: '/team',
                    controller: 'TeamCtrl',
                    templateUrl: '/views/marketing/team.html',
                    onEnter: [function() {

                    }]
                })

                // --------------------------------------------------------- //
                //  MARKETING - CAREERS
                // --------------------------------------------------------- //
                .state('marketing.careers', {
                    url: '/careers',
                    templateUrl: '/views/marketing/careers.html',
                    onEnter: [function() {

                    }]
                })

                // --------------------------------------------------------- //
                //  MARKETING - RESOURCES
                // --------------------------------------------------------- //
                .state('marketing.resources', {
                    url: '/resources',
                    templateUrl: '/views/marketing/resources.html',
                    onEnter: [function() {

                    }]
                })

                // --------------------------------------------------------- //
                //  MARKETING - CONTACT
                // --------------------------------------------------------- //
                .state('marketing.contact', {
                    url: '/contact',
                    templateUrl: '/views/marketing/contact.html',
                    onEnter: [function() {

                    }]
                })
            ;
    }]);
