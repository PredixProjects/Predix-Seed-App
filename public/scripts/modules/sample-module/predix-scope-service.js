define(['angular', './sample-module'], function(angular, module) {
    'use strict';

    /**
     * Predix Web Service is a sample service that integrates with Predix Asset Server API
     */
    module.factory('Scopes', function ($rootScope) {
    var mem = {};
 
    return {
        store: function (key, value) {
            $rootScope.$emit('scope.stored', key);
            mem[key] = value;
        },
        get: function (key) {
            return mem[key];
        }
    };
   });
});
