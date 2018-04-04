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
                controller: 'MarketingCtrl',
                templateUrl: '/views/marketing/root.html',
                onEnter: [function() {

                }]
            })
                // --------------------------------------------------------- //
                //  MARKETING - PROPERTY LIST
                // --------------------------------------------------------- //
                .state('marketing.property-list', {
                    url: '/property-list?&type&locality&minPrice&maxPrice&minBeds&minBaths&limit&offset',
                    controller: 'PropertyListCtrl',
                    templateUrl: '/views/marketing/property-list.html',
                    onEnter: [function() {

                    }]
                })

                // --------------------------------------------------------- //
                //  MARKETING - PROPERTY DETAIL
                // --------------------------------------------------------- //
                .state('marketing.property-detail', {
                    url: '/property-list/:propertyId',
                    controller: 'PropertyDetailCtrl',
                    templateUrl: '/views/marketing/property.html',
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
                //  MARKETING - RESOURCES
                // --------------------------------------------------------- //
                .state('marketing.resources', {
                    url: '/resources',
                    controller: 'ResourcesCtrl',
                    templateUrl: '/views/marketing/resources.html',
                    onEnter: [function() {

                    }]
                })

                // --------------------------------------------------------- //
                //  MARKETING - CONTACT
                // --------------------------------------------------------- //
                .state('marketing.contact', {
                    url: '/contact',
                    controller: 'ContactCtrl',
                    templateUrl: '/views/marketing/contact.html',
                    onEnter: [function() {

                    }]
                })
            ;
    }]);
