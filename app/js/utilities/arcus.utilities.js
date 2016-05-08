angular.module('arcus.utilities', [])

    .factory('SEOUtility', ['$rootScope',
        function($rootScope) {

            var _title = '';
            var _description = '';
            var _keywords = [];

            return {

                getTitle: function() {
                    return _title;
                },

                setTitle: function(title) {
                    _title = title;
                    $rootScope.$broadcast('SEO_TITLE_UPDATED');
                },

                getDescription: function() {
                    return _description;
                },

                setDescription: function(description) {
                    _description = description;
                    $rootScope.$broadcast('SEO_DESCRIPTION_UPDATED');
                },

                getKeywords: function() {
                    return _keywords.join(',');
                },

                addKeyword: function(keyword) {
                    _keywords.push(keyword);
                    $rootScope.$broadcast('SEO_KEYWORDS_UPDATED');
                },

                setKeywords: function(keywords) {
                    _keywords = keywords;
                    $rootScope.$broadcast('SEO_KEYWORDS_UPDATED');
                }

            };

        }])

    .factory('ModelGenerator', ['DEBUG_MODE', '$log',
        function(DEBUG_MODE, $log) {

            var _makeGetterForKey = function(key) {
                return function() {
                    return this[key];
                };
            };

            var _makeSetterForKey = function(key) {
                return function(value) {
                    this[key] = value;
                };
            };


            return {
                generateFromData: function(name, model, json, optional) {
                    var errors = [];
                    if (optional === undefined) {
                        optional = [];
                    }

                    var key = null;
                    var copyableData = {};
                    for (key in model) {
                        if (model.hasOwnProperty(key)) {
                            if (key === 'optionalFields' || typeof(model[key]) === "function") {
                                continue;
                            }

                            var property = json[key];

                            if (property === undefined && optional.indexOf(key) === -1) {
                                errors.push("JSON data does not have variable " + key);
                            } else if (typeof(property) !== typeof(model[key]) && property !== undefined && optional.indexOf(key) !== -1) {
                                errors.push("Data type does not match for key "+key);
                            } else if (property !== undefined) {
                                copyableData[key] = property;
                            }
                        }
                    }

                    if (errors.length !== 0 && DEBUG_MODE) {
                        $log.log('==== Model Build Failed: ' + name + ' ====');
                        $log.log(errors);
                        $log.log('==== / Model Build Failed ====');
                    }

                    for (key in copyableData) {
                        if (copyableData.hasOwnProperty(key)) {
                            if (model[key] === Object(model[key]) && !(model[key] instanceof Array)) {
                                var temp = {};
                                angular.copy(model[key], temp);
                                model[key] = this.generateFromData(name + "SubObject", temp, json[key], model[key].optionalFields);
                            } else if(model[key] instanceof Array && model[key].length > 0) {
                                var data = json[key];
                                var Cons = model[key][0].constructor;
                                model[key] = [];
                                for(var i = 0;i < data.length;i++){
                                    var newObject = new Cons(data[i]);
                                    model[key].push(this.generateFromData(name+"SubObject",newObject,data[i]));
                                }
                            } else {
                                model[key] = copyableData[key];
                            }
                        }
                    }

                    return model;
                },

                generateGettersAndSetters : function(o,proto){
                    for(var key in o){
                        if (o.hasOwnProperty(key) && typeof o[key] !== 'function') {
                            var uppercaseKey = key.charAt(0).toUpperCase() + key.slice(1);
                            proto['get' + uppercaseKey] = _makeGetterForKey(key);
                            proto['set' + uppercaseKey] = _makeSetterForKey(key);
                        }
                    }
                }

            };

        }]);
