angular.module('nuageInvestment').factory('CityTaxRateModel', ['ModelGenerator',
    function(ModelGenerator) {
        'use strict';

        var CityTaxRateModel = function(data) {

            this.name = '';
            this.residentialTaxRate = 0;
            this.residentialExemption = '';
            this.exemptionValue = 0 || null;
            this.exemptionTax = 0 || null;

            if (angular.isDefined(data)) {
                ModelGenerator.generateFromData('CityTaxRateModel', this, data, this.optionalFields);
            }

        };

        return CityTaxRateModel;

    }]);
