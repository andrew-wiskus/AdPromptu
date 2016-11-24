var myApp = angular.module("myApp", ["ngRoute", "firebase", 'nemLogging', 'ui-leaflet']);
myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '/views/partials/home.html',
            controller: 'HomeController'
        })
        .when('/map', {
            templateUrl: '/views/partials/map.html',
            controller: 'MapController'
        })
        .otherwise({
            redirectTo: 'home'
        });

}]);
