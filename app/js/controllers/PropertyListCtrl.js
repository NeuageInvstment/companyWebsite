angular.module('nuageInvestment').controller('PropertyListCtrl', ['$scope', '$state', '$stateParams', '$element', 'PROPERTY_CITY',
    function($scope, $state, $stateParams, $element, PROPERTY_CITY) {
        'use strict';
        $scope.cities = PROPERTY_CITY;
        $scope.searchTerm = '';
        $scope.clearSearchTerm = function() {
          $scope.searchTerm = '';
        };

        $scope.selectedCity = '';

        $element.find('input').on('keydown', function(ev) {
          ev.stopPropagation();
        });

        $scope.minPriceStep = 10000;
        $scope.maxPriceStep = 10000;
        $scope.minPrice = 0;
        $scope.maxPrice = 3000000;
        $scope.numBedBath = ['0+', '1+', '2+', '3+', '4+', '5+', '6+'];
        $scope.minBeds = $scope.numBedBath[0];
        $scope.minBaths = $scope.numBedBath[0];

        $scope.isLoading = {
            properties: false
        };

        $scope.salesType = 'buy';
        $scope.setSalesType = function(type) {
            $scope.salesType = type;
        }

        var PAGE_SIZE = $stateParams.limit ? parseInt($stateParams.limit) : 25;

        $scope.options = {
            limit: PAGE_SIZE,
            offset: $stateParams.offset ?
                parseInt($stateParams.offset) :
                0,
            type: $stateParams.type ?
                JSON.parse($stateParams.type) : 'sale',
            locality: $stateParams.locality ?
                JSON.parse($stateParams.locality) : '',
            minPrice: $stateParams.minPrice ?
                parseInt($stateParams.minPrice) : 0,
            maxPrice: $stateParams.maxPrice ?
                parseInt($stateParams.maxPrice) : 0,
            minBeds: $stateParams.minBeds ?
                parseInt($stateParams.minBeds) : 0,
            minBaths: $stateParams.minBaths ?
                parseInt($stateParams.minBeds) : 0
        };





    }]);
