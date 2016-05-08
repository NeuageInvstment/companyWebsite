angular.module('nuageInvestment').factory('ContactDataService', ['$q', '$http', 'APIRepository', 'MessageModel',
    function($q, $http, APIRepository, Message) {
        'use strict';


        return {

            sendMessage: function(message) {
                var deferred = $q.defer();

                APIRepository.post('/contact')
                    .then(function(response){
                        deferred.resolve(new Message(response.body));
                    }, function(error){
                        deferred.reject(error);
                    });

                return deferred.promise;
            }

        };

    }]);
