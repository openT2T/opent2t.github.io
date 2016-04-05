'use strict';

angular.module('opent2t.gettingStarted', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/gettingStarted', {
            templateUrl: 'gettingStarted/gettingStarted.html',
            controller: 'gettingStartedCtrl'
        });

        $routeProvider.when('/gettingStartedStep1', {
            templateUrl: 'gettingStarted/step1.html',
            controller: 'gettingStartedCtrl'
        });

        $routeProvider.when('/gettingStartedStep2', {
            templateUrl: 'gettingStarted/step2.html',
            controller: 'gettingStartedCtrl'
        });

        $routeProvider.when('/gettingStartedStep3', {
            templateUrl: 'gettingStarted/step3.html',
            controller: 'gettingStartedCtrl'
        });

        $routeProvider.when('/gettingStartedStep4', {
            templateUrl: 'gettingStarted/step4.html',
            controller: 'gettingStartedCtrl'
        });

        $routeProvider.when('/gettingStartedStep5', {
            templateUrl: 'gettingStarted/step5.html',
            controller: 'gettingStartedCtrl'
        });

        $routeProvider.when('/gettingStartedStep6', {
            templateUrl: 'gettingStarted/step6.html',
            controller: 'gettingStartedCtrl'
        });

        $routeProvider.when('/gettingStartedStep7', {
            templateUrl: 'gettingStarted/step7.html',
            controller: 'gettingStartedCtrl'
        });
    }])

    .controller('gettingStartedCtrl', [function() {

    }]);