angular.module('nuageInvestment').controller('ResourcesCtrl', ['$scope', 'MarketIndexPerCityModel', 'CityTaxRateModel', 'SchoolModel',
    function($scope, MarketIndexPerCity, CityTaxRate, School) {
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
        ];

        $scope.schools = [
            new School({
                district: 'Dover-Sherborn',
                rank: 1,
                enrollment: 2036,
                classSize: 16.7,
                studentTeacherRatio: 11.9,
                perPupilSpending: 18052,
                graduationRatio: 97.3,
                attendingCollegeRatio: 91.9
            }),
            new School({
                district: 'Weston',
                rank: 2,
                enrollment: 2253,
                classSize: 17.2,
                studentTeacherRatio: 11.5,
                perPupilSpending: 20579,
                graduationRatio: 99.5,
                attendingCollegeRatio: 85.6
            }),
            new School({
                district: 'Lexington',
                rank: 3,
                enrollment: 6785,
                classSize: 19.6,
                studentTeacherRatio: 12.4,
                perPupilSpending: 16812,
                graduationRatio: 94.9,
                attendingCollegeRatio: 86.5
            }),
            new School({
                district: 'Wayland',
                rank: 4,
                enrollment: 2659,
                classSize: 17.1,
                studentTeacherRatio: 13.0,
                perPupilSpending: 16177,
                graduationRatio: 98.5,
                attendingCollegeRatio: 87.1
            }),
            new School({
                district: 'Bedford',
                rank: 5,
                enrollment: 2522,
                classSize: 14.8,
                studentTeacherRatio: 11.5,
                perPupilSpending: 16993,
                graduationRatio: 94.6,
                attendingCollegeRatio: 85.1
            }),
            new School({
                district: 'Concord-Carlisle',
                rank: 6,
                enrollment: 4010,
                classSize: 17.9,
                studentTeacherRatio: 12.9,
                perPupilSpending: 17852,
                graduationRatio: 95.5,
                attendingCollegeRatio: 87.5
            }),
            new School({
                district: 'Harvard',
                rank: 7,
                enrollment: 1143,
                classSize: 17.1,
                studentTeacherRatio: 12.9,
                perPupilSpending: 14691,
                graduationRatio: 97.1,
                attendingCollegeRatio: 88.2
            }),
            new School({
                district: 'Wellesley',
                rank: 8,
                enrollment: 5067,
                classSize: 17.4,
                studentTeacherRatio: 13.4,
                perPupilSpending: 17232,
                graduationRatio: 97.3,
                attendingCollegeRatio: 88.9
            }),
            new School({
                district: 'Westborough',
                rank: 9,
                enrollment: 3624,
                classSize: 17.3,
                studentTeacherRatio: 13.4,
                perPupilSpending: 14306,
                graduationRatio: 97.1,
                attendingCollegeRatio: 91.9
            }),
            new School({
                district: 'Newton',
                rank: 10,
                enrollment: 12674,
                classSize: 18.6,
                studentTeacherRatio: 12.0,
                perPupilSpending: 17141,
                graduationRatio: 95.3,
                attendingCollegeRatio: 85.3
            }),
            new School({
                district: 'Sharon',
                rank: 11,
                enrollment: 3483,
                classSize: 18.6,
                studentTeacherRatio: 13.6,
                perPupilSpending: 14659,
                graduationRatio: 95.5,
                attendingCollegeRatio: 90.6
            }),
            new School({
                district: 'Medfield',
                rank: 12,
                enrollment: 2638,
                classSize: 18.2,
                studentTeacherRatio: 13.3,
                perPupilSpending: 12321,
                graduationRatio: 97.5,
                attendingCollegeRatio: 92.4
            }),
            new School({
                district: 'Lincoln-Sudbury',
                rank: 13,
                enrollment: 5732,
                classSize: 19.0,
                studentTeacherRatio: 12.7,
                perPupilSpending: 16042,
                graduationRatio: 97.1,
                attendingCollegeRatio: 87.9
            }),
            new School({
                district: 'Holliston',
                rank: 14,
                enrollment: 2824,
                classSize: 16.5,
                studentTeacherRatio: 13.6,
                perPupilSpending: 12548,
                graduationRatio: 99.0,
                attendingCollegeRatio: 88.5
            }),
            new School({
                district: 'Winchester',
                rank: 15,
                enrollment: 4505,
                classSize: 19.0,
                studentTeacherRatio: 13.5,
                perPupilSpending: 12380,
                graduationRatio: 98.5,
                attendingCollegeRatio: 93.8
            }),
            new School({
                district: 'Manchester Essex',
                rank: 16,
                enrollment: 1507,
                classSize: 17.6,
                studentTeacherRatio: 12.0,
                perPupilSpending: 14317,
                graduationRatio: 96.6,
                attendingCollegeRatio: 84.1
            }),
            new School({
                district: 'Marblehead',
                rank: 17,
                enrollment: 3245,
                classSize: 16.8,
                studentTeacherRatio: 12.6,
                perPupilSpending: 12706,
                graduationRatio: 96.5,
                attendingCollegeRatio: 89.0
            }),
            new School({
                district: 'Northboro-Southboro',
                rank: 18,
                enrollment: 4604,
                classSize: 17.4,
                studentTeacherRatio: 13.0,
                perPupilSpending: 13864,
                graduationRatio: 96.9,
                attendingCollegeRatio: 91.0
            }),
            new School({
                district: 'Westford',
                rank: 19,
                enrollment: 5139,
                classSize: 19.1,
                studentTeacherRatio: 14.3,
                perPupilSpending: 11838,
                graduationRatio: 98.0,
                attendingCollegeRatio: 89.8
            }),
            new School({
                district: 'Brookline',
                rank: 20,
                enrollment: 7508,
                classSize: 17.1,
                studentTeacherRatio: 13.0,
                perPupilSpending: 16924,
                graduationRatio: 91.0,
                attendingCollegeRatio: 82.0
            })
        ];
    }]);
