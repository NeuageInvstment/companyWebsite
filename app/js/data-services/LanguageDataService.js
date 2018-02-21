angular.module('nuageInvestment').factory('LanguageDataService', ['$rootScope', '$q', '$http', '$cookies', '$translate',
    function($rootScope, $q, $http, $cookies, $translate) {
        'use strict';
        var LANGUAGE_COOKIE = 'NUAGE_GROUP_SELECTED_LANGUAGE';

        var _setLanguage = function(languageKey) {
            $translate.use(languageKey);
            $rootScope.selectLanguage = languageKey;
        };

        if($cookies.get(LANGUAGE_COOKIE)){
            _setLanguage($cookies.get(LANGUAGE_COOKIE));
        }

        return {

            getSelectedLanguage: function() {
                return $translate.use();
            },

            setLanguage: function(languageKey) {
                if ($cookies.get(LANGUAGE_COOKIE)) {
                  $cookies.remove(LANGUAGE_COOKIE);
                }
                $cookies.put(LANGUAGE_COOKIE, languageKey);
                _setLanguage(languageKey);
            }

        };

    }]);
