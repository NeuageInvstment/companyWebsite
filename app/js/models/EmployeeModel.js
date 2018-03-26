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
            this.lineId = '' || null;
            this.certificate = '' || null;
            this.profileImageURI = '' || null;
            this.language = '';
            this.license = '';
            this.licenseUrl = '';

            if (angular.isDefined(data)) {
                ModelGenerator.generateFromData('EmployeeModel', this, data, this.optionalFields);
            }

        };

        return EmployeeModel;

    }
]);
