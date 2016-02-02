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
                //  MARKETING - TEAM
                // --------------------------------------------------------- //
                .state('marketing.team', {
                    url: '/team',
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
