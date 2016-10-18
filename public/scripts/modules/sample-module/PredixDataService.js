/*global define */
define(['angular', './sample-module'], function (angular, services) {
	'use strict';
	services.factory('PredixDataService',['$http','$q',function($http,$q){
		return{
			getData:function(){
				var deferred = $q.defer();
                $http.get('/sample-data/data.json').then(function (res) {
                        deferred.resolve(res.data);
                    },
                    function () {
                        deferred.reject('Error fetching records ');
                    });
                return deferred.promise;
			},			
			getScope:function(id){
				return angular.element(document.getElementById(id)).scope();
			},
			getIsolateScope:function(id){
				return angular.element(document.getElementById(id)).isolateScope();
			}
		};
	}]);
	return services;
});