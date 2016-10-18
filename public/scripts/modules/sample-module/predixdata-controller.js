define(['angular', './sample-module'], function(angular, sampleModule) {
    'use strict';
    return sampleModule.controller('PredixDataCtrl', ['$scope','$log','PredixDataService', function($scope,$log,PredixDataService) {
        $scope.context = {
            url: 'http://api.wunderground.com/api/e77862ea276e303e/conditions/q/CA/San_Ramon.json?callback=JSON_CALLBACK'
        };
		$scope.items=[];
		$scope.getRecord=function(){
			 PredixDataService.getData() 
                .then(function (data) {
					var postatus,supplierid;
					var url=document.URL;
					var querystring=url.substring(url.indexOf("?"),url.length).split("&");
					postatus=querystring?querystring[0].split("=")[1]:"all";
					supplierid=querystring[1]?querystring[1].split("=")[1]:"all";
					postatus=postatus?postatus:"all";
					supplierid=supplierid?supplierid:"all";
					$scope.items=[];
					
					if(postatus=="all" && supplierid=="all"){
						$scope.items=data;						
					}else
					if(postatus!="all" && supplierid!="all"){
						angular.forEach(data,function(value,key){						
							if(value.postatus==postatus && value.supplierid==supplierid){
								$scope.items.push(value);
							}
						});
					}else
					if(postatus!="all" && supplierid=="all"){
						angular.forEach(data,function(value,key){						
							if(value.postatus==postatus){
								$scope.items.push(value);
							}
						});						
					}else
					if(postatus=="all" && supplierid!="all"){
						angular.forEach(data,function(value,key){						
							if(value.supplierid==supplierid){
								$scope.items.push(value);
							}
						});	
					}
               });
		};
		$scope.getRecord();
		$scope.appliedExpandIconClass = function(selected) {
			 return selected ? 'fa-chevron-up' : 'fa-chevron-down';
        };
		$scope.appliedExpandClass = function(selected) {
			 return selected ? 'expand' : 'collapse';
        };
		$scope.toggleClass=function(item){
			item.expanded=!item.expanded;
			
		};
		
    }]);
});
