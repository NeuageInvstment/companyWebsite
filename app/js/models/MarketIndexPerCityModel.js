angular.module('nuageInvestment').factory('MarketIndexPerCityModel', ['ModelGenerator',
    function(ModelGenerator) {
        'use strict';

        var MarketIndexPerCityModel = function(data) {

            this.name = '';
            this.homeValueIndex = 0;
            this.oneYearChange = '';
            this.oneYearForecast = '';
            this.rentIndex = 0;

            if (angular.isDefined(data)) {
                ModelGenerator.generateFromData('MarketIndexPerCityModel', this, data, this.optionalFields);
            }

        };

        return MarketIndexPerCityModel;

    }]);
