'use strict';

// Declare app level module which depends on views, and components
angular.module('opent2t', [
    'ngRoute',
    'opent2t.home',
    'opent2t.gettingStarted',
    'opent2t.roadmap'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/' });
    }]);