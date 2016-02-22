angular.module('nuageInvestment').controller('TeamCtrl', ['$scope', 'EmployeeModel','EmployeeDataService',
    function($scope, Employee, EmployeeDataService) {
        'use strict';

        $scope.bostonEmployees = EmployeeDataService.getEmployeeCollectionByLocation('Boston');
        $scope.newYorkEmployees = EmployeeDataService.getEmployeeCollectionByLocation('New York');
        $scope.connecticutEmployees = EmployeeDataService.getEmployeeCollectionByLocation('Connecticut');
        $scope.overSeaEmployees = EmployeeDataService.getEmployeeCollectionByLocation('China');

        $scope.getEmployeeInfoById = function(id) {
            return EmployeeDataService.getEmployeeById(id);
        }

    }]);
