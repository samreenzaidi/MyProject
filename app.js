var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider 
    .when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    .when('/main', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    .otherwise({
        redirectTo: 'pages/home.html'
    });
    
});
