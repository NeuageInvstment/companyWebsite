angular.module('nuageInvestment').factory('MessageModel', ['ModelGenerator',
    function(ModelGenerator) {
        'use strict';

        var MessageModel = function(data) {

            this.name = '';
            this.email = '';
            this.message = '';

            if (angular.isDefined(data)) {
                ModelGenerator.generateFromData('MessageModel', this, data, this.optionalFields);
            }

        };

        return MessageModel;

    }]);
