'use strict';

angular.module('opent2t.roadmap', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/roadmap', {
    templateUrl: 'roadmap/roadmap.html',
    controller: 'roadmapCtrl'
  });
}])

.controller('roadmapCtrl', [function() {

}]);