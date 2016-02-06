angular.module('nuageInvestment').factory('GmapRepository', ['$q', '$http', 'GMAP_API_KEY',
    function($q, $http, GMAP_API_KEY) {
        'use strict';

        // var map = new google.maps.Map({
        //     key: GMAP_API_KEY,
        //     v: '3.20', //defaults to latest 3.X anyhow
        //     libraries: 'weather,geometry,visualization'
        // });

        return {

            getMap: function(map) {
                return map;
            }

        };

    }]);
