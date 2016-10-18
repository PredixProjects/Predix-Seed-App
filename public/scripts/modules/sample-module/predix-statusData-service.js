define(['angular', './sample-module'], function(angular, module) {
    'use strict';

    /**
     * Predix Web Service is a sample service that integrates with Predix Asset Server API
     */
    module.factory('PredixStatusDataService', ['$q', '$http', function($q, $http) {
        /**
         * fetch Customer Details
         */
        var getStatusDetails = function() {
            var deferred = $q.defer();
            var serviceUrl = 'https://predix-jpa-app1986.run.aws-usw02-pr.ice.predix.io/status';
			var headers = {
				'Origin' : '*',
				'Access-Control-Request-Method' : 'POST, GET, OPTIONS, PUT'
			};
            $http({
            method: 'GET',
            url: serviceUrl,
            headers: headers
        })
                .success(function(data) {
                    var statusData = {
                        data: data
                    };
                    deferred.resolve(statusData);
                })
                .error(function() {
                    deferred.reject('Error fetching Customer Details');
                });


            return deferred.promise;
        };
		return {
            getStatusDetails: getStatusDetails
        };
		
    }]);
});
