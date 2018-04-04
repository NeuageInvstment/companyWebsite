angular.module('nuageInvestment').factory('PropertyDataService', ['$q', '$http', 'APIRepository',
    function($q, $http, APIRepository) {
        'use strict';

        return {

            getPropertyList: function() {
                var deferred = $q.defer();

                APIRepository.get('property-list')

                return deferred.promise;
            },

            getPropertyById: function(propertyId) {

            }

        };

    }]);
