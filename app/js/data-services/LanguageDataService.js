angular.module('nuageInvestment').factory('LanguageDataService', ['$q', '$http', '$translate',
    function($q, $http, $translate) {
        'use strict';

        var _setLanguage = function(languageKey) {
            $translate.use(languageKey);
        };

        return {

            getSelectedLanguage: function() {
                return $translate.use();
            },

            setLanguage: function(languageKey) {
                //$cookies.put(LANGUAGE_COOKIE, languageKey);
                _setLanguage(languageKey);
            }

        };

    }]);
