angular.module('nuageInvestment').factory('EmployeeModel', ['ModelGenerator',
    function(ModelGenerator) {
        'use strict';

        var EmployeeModel = function(data) {

            this.id = 0;
            this.fullName = '';
            this.title = '';
            this.email = '';
            this.phoneNumber = '';
            this.location = '';
            this.wechatId = '' || null;
            this.certificate = '' || null;
            this.profileImageURI = '' || null;
            this.language = '';

            if (angular.isDefined(data)) {
                ModelGenerator.generateFromData('EmployeeModel', this, data, this.optionalFields);
            }

        };

        return EmployeeModel;

    }
]);
