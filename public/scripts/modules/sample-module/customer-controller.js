define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('customerDetailCtrl', ['$scope', '$log', 'PredixWebService', function ($scope, $log, PredixWebService) {

        PredixWebService.getCustomerDetails().then(function (customerData) {
                console.log(JSON.stringify(customerData.data));
				$scope.data=JSON.stringify(customerData.data);
            }, function (message) {
            $log.error(message);
        });
    }]);
});
