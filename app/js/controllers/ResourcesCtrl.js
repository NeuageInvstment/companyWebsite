angular.module('nuageInvestment').controller('ResourcesCtrl', ['$scope', 'MarketIndexPerCityModel', 'CityTaxRateModel',
    function($scope, MarketIndexPerCity, CityTaxRate) {
        'use strict';

        $scope.MarketIndex = [
            new MarketIndexPerCity({
                name: 'Allston',
                homeValueIndex: 389800,
                oneYearChange: '12.4%',
                oneYearForecast: '2.0%',
                rentIndex: 2367
            }),
            new MarketIndexPerCity({
                name: 'Arlington',
                homeValueIndex: 604300,
                oneYearChange: '8.4%',
                oneYearForecast: '1.9%',
                rentIndex: 2621
            }),
            new MarketIndexPerCity({
                name: 'Arlington',
                homeValueIndex: 604300,
                oneYearChange: '8.4%',
                oneYearForecast: '1.9%',
                rentIndex: 2621
            }),
            new MarketIndexPerCity({
                name: 'Back Bay',
                homeValueIndex: 858200,
                oneYearChange: '11.3%',
                oneYearForecast: '2.4%',
                rentIndex: 3182
            }),
            new MarketIndexPerCity({
                name: 'Belmont',
                homeValueIndex: 1492100,
                oneYearChange: '7.3%',
                oneYearForecast: '1.7%',
                rentIndex: 3165
            }),
            new MarketIndexPerCity({
                name: 'Brighton',
                homeValueIndex: 362500,
                oneYearChange: '11.6%',
                oneYearForecast: '2.2%',
                rentIndex: 2187
            }),
            new MarketIndexPerCity({
                name: 'Cambridge',
                homeValueIndex: 644400,
                oneYearChange: '12.0%',
                oneYearForecast: '3.3%',
                rentIndex: 2738
            }),
            new MarketIndexPerCity({
                name: 'Lexington',
                homeValueIndex: 835500,
                oneYearChange: '8.1%',
                oneYearForecast: '1.8%',
                rentIndex: 3292
            }),
            new MarketIndexPerCity({
                name: 'Malden',
                homeValueIndex: 351800,
                oneYearChange: '8.0%',
                oneYearForecast: '1.7%',
                rentIndex: 2262
            }),
            new MarketIndexPerCity({
                name: 'Medford',
                homeValueIndex: 446300,
                oneYearChange: '10.2%',
                oneYearForecast: '1.9%',
                rentIndex: 2421
            }),
            new MarketIndexPerCity({
                name: 'Newton',
                homeValueIndex: 883900,
                oneYearChange: '10.2%',
                oneYearForecast: '2.7%',
                rentIndex: 3348
            }),
            new MarketIndexPerCity({
                name: 'Somerville',
                homeValueIndex: 883900,
                oneYearChange: '10.2%',
                oneYearForecast: '2.7%',
                rentIndex: 3348
            }),
            new MarketIndexPerCity({
                name: 'Waltham',
                homeValueIndex: 464900,
                oneYearChange: '8.3%',
                oneYearForecast: '1.5%',
                rentIndex: 2516
            })
        ];

        $scope.citiesTaxRate = [
            new CityTaxRate({
                name:  'Allston',
                residentialTaxRate: 11.00,
                residentialExemption: 'Yes',
                exemptionValue: null,
                exemptionTax: null
            }),
            new CityTaxRate({
                name:  'Arlington',
                residentialTaxRate: 12.80,
                residentialExemption: 'No',
                exemptionValue: null,
                exemptionTax: null
            }),
            new CityTaxRate({
                name:  'Back Bay',
                residentialTaxRate: 11.00,
                residentialExemption: 'Yes',
                exemptionValue: null,
                exemptionTax: null
            }),
            new CityTaxRate({
                name:  'Belmont',
                residentialTaxRate: 12.56,
                residentialExemption: 'No',
                exemptionValue: null,
                exemptionTax: null
            }),
            new CityTaxRate({
                name:  'Brighton',
                residentialTaxRate: 11.00,
                residentialExemption: 'Yes',
                exemptionValue: null,
                exemptionTax: null
            }),
            new CityTaxRate({
                name:  'Brooline',
                residentialTaxRate: 10.42,
                residentialExemption: 'Yes',
                exemptionValue: null,
                exemptionTax: null
            }),
            new CityTaxRate({
                name:  'Cambridge',
                residentialTaxRate: 6.99,
                residentialExemption: 'Yes',
                exemptionValue: 277937,
                exemptionTax: 1942.78
            }),
            new CityTaxRate({
                name:  'Lexington',
                residentialTaxRate: 14.60,
                residentialExemption: 'No',
                exemptionValue: null,
                exemptionTax: null
            }),
            new CityTaxRate({
                name:  'Malden',
                residentialTaxRate: 15.16,
                residentialExemption: 'Yes',
                exemptionValue: null,
                exemptionTax: null
            }),
            new CityTaxRate({
                name:  'Medford',
                residentialTaxRate: 11.19,
                residentialExemption: 'No',
                exemptionValue: null,
                exemptionTax: null
            }),
            new CityTaxRate({
                name:  'Newton',
                residentialTaxRate: 11.38,
                residentialExemption: 'No',
                exemptionValue: null,
                exemptionTax: null
            }),
            new CityTaxRate({
                name:  'Somerville',
                residentialTaxRate: 12.53,
                residentialExemption: 'Yes',
                exemptionValue: null,
                exemptionTax: null
            }),
            new CityTaxRate({
                name:  'Waltham',
                residentialTaxRate: 12.24,
                residentialExemption: 'Yes',
                exemptionValue: 88722,
                exemptionTax: 1085.96
            })
        ]

    }]);
