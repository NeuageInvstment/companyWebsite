angular.module('nuageInvestment').factory('ResponseModel', ['ModelGenerator',
    function(ModelGenerator) {
        'use strict';

        var ResponseModel = function(data) {

            this.status = 200;
            this.body = '';
            this.headers = {};

            if (angular.isDefined(data)) {
                ModelGenerator.generateFromData('ResponseModel', this, data, this.optionalFields);
            }

        };

        ResponseModel.prototype.params = function(key) {
            return this.body[key];
        };

        ResponseModel.prototype.header = function(key) {
            return this.headers[key];
        };

        return ResponseModel;

    }]);
