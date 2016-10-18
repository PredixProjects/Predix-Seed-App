define(['angular', './sample-module'], function (angular, controllers) {
    'use strict';

    // Controller definition
    controllers.controller('customerDetailCtrl', ['$scope', '$log', 'PredixWebService', function ($scope, $log, PredixWebService) {

        PredixWebService.getSupplierDetails().then(function (supplierData) {
                console.log(JSON.stringify(supplierData.data));
				$scope.data=JSON.stringify(supplierData.data);
				$scope.items=[];
				angular.forEach(data,function(value,key){
                    console.log(value.supplierid);				
					$scope.items.push(value.supplierid);	
				});
				
            }, function (message) {
            $log.error(message);
        });
    }]);
});
