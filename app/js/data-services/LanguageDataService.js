angular.module('nuageInvestment').factory('LanguageDataService', ['$rootScope', '$q', '$http', '$cookies', '$translate',
    function($rootScope, $q, $http, $cookies, $translate) {
        'use strict';
        var LANGUAGE_COOKIE = 'languagecookie';

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
                $cookies.put(LANGUAGE_COOKIE, languageKey);
                _setLanguage(languageKey);
            }

        };

    }]);
