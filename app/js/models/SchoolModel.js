angular.module('nuageInvestment').factory('SchoolModel', ['ModelGenerator',
    function(ModelGenerator) {
        'use strict';

        var SchoolModel = function(data) {

            this.district = '';
            this.rank = 0;
            this.enrollment = 0;
            this.classSize = 0;
            this.studentTeacherRatio = 0;
            this.perPupilSpending = 0;
            this.graduationRatio = 0;
            this.attendingCollegeRatio = 0;

            if (angular.isDefined(data)) {
                ModelGenerator.generateFromData('SchoolModel', this, data, this.optionalFields);
            }

        };

        return SchoolModel;

    }]);
