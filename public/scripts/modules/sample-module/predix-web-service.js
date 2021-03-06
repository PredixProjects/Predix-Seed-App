define(['angular', './sample-module'], function(angular, module) {
    'use strict';

    /**
     * Predix Web Service is a sample service that integrates with Predix Asset Server API
     */
    module.factory('PredixWebService', ['$q', '$http', function($q, $http) {
        /**
         * fetch Customer Details
         */
        var getSupplierDetails = function() {
            var deferred = $q.defer();
            var serviceUrl = 'https://predix-jpa-app1986.run.aws-usw02-pr.ice.predix.io/supplier';
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
                    var supplierData = {
                        data: data
                    };
                    deferred.resolve(supplierData);
                })
                .error(function() {
                    deferred.reject('Error fetching Customer Details');
                });


            return deferred.promise;
        };
		return {
            getSupplierDetails: getSupplierDetails
        };
		
    }]);
});
