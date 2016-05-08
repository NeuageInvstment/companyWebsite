angular.module('nuageInvestment').factory('APIRepository', ['$q', '$http', '$log', 'ResponseModel', 'DEBUG_MODE',
    function ($q, $http, $log, Response, DEBUG_MODE) {

        var _getHeadersFromResponse = function(response) {
            var headers = response.headers();
            headers['X-PAGING-CURRENT-TOKEN']   = response.headers('x-paging-current-token');
            headers['X-PAGING-NEXT-TOKEN']      = response.headers('x-paging-next-token');
            headers['X-PAGING-RESULT-SIZE']     = parseInt(response.headers('x-paging-result-size'));

            return headers;
        };


        var httpRequest = function(method, url, qsParams, body, headers) {
            var deferredAbort = $q.defer();

            if (!headers) {
                headers = {};
            }

            var httpBody = {
                url: url,
                method: method,
                headers: headers,
                timeout: deferredAbort.promise
            };

            if (method.toLowerCase() !== 'get' && body) {
                httpBody.data = JSON.stringify(body);
            }

            if (qsParams) {
                httpBody.params = qsParams;
            }

            var request = $http(httpBody);
            var promise = request.then(function(response) {
                var responseHeaders = _getHeadersFromResponse(response);

                return new Response({
                    status: response.status,
                    headers: responseHeaders,
                    body: response.data
                });
            }, function(response) {
                var headers = _getHeadersFromResponse(response);

                return $q.reject(new Response({
                    status: response.status,
                    headers: headers,
                    body: response.data
                }));
            });

            promise.abort = function() {
                if (DEBUG_MODE) {
                    $log.log('==== HTTP Promise Cancelled ====');
                    $log.log('Promise:');
                    $log.log(promise);
                    $log.log('==== / HTTP Promise Cancelled');
                    $log.log(' ');
                }

                deferredAbort.resolve();
            };

            promise.finally(function() {
                promise.abort = angular.noop;
                deferredAbort = request = promise = null;
            });

            return promise;
        };


        return {

            urlGenerator: function(url, data) {
                for (var key in data) {
                    if (data.hasOwnProperty(key)) {
                        url = url.replace(':' + key, encodeURIComponent(data[key]));
                    }
                }

                return url;
            },

            post: function(url, qsParams, params, headers) {
                return httpRequest('POST', url, qsParams, params, headers);
            }

        };

    }]);
