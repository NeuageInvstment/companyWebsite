angular.module('nuageInvestment').controller('TeamCtrl', ['$rootScope', '$scope', '$state', 'EmployeeModel','EmployeeDataService',
    function($rootScope, $scope, $state, Employee, EmployeeDataService) {
        'use strict';

        var getEmployees = function() {
            $scope.bostonEmployees = EmployeeDataService.getEmployeeCollectionByLocation('Boston', $rootScope.selectLanguage);
            $scope.newYorkEmployees = EmployeeDataService.getEmployeeCollectionByLocation('New York', $rootScope.selectLanguage);
            $scope.connecticutEmployees = EmployeeDataService.getEmployeeCollectionByLocation('Connecticut', $rootScope.selectLanguage);
            $scope.overSeaEmployees = EmployeeDataService.getEmployeeCollectionByLocation('China', $rootScope.selectLanguage);
        };

        getEmployees();

        $scope.$watch('selectLanguage', function(newValue, oldValue){
            if(newValue !== oldValue) {
                getEmployees();
            }
        })

    }]);
