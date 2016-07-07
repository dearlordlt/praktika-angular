'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap',
    'myApp.view1',
    'myApp.view2',
    'myApp.view3',
    'myApp.view5',
    'myApp.view4',
    'ngCookies',
    'myApp.DatabaseTestThing',
    'myApp.CoolLoginPage'
]).config(['$locationProvider', '$routeProvider', '$httpProvider', function ($locationProvider, $routeProvider, $httpProvider) {


    $httpProvider.interceptors.push('interceptorService');

    $locationProvider.hashPrefix('!');

    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    }).when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
    }).when('/view3', {
        templateUrl: 'view3/view3.html',
        controller: 'View3Ctrl'
    }).when('/view4', {
        templateUrl: 'view4/view4.html',
        controller: 'View4Ctrl'
    }).when('/view5', {
        templateUrl: 'view5/view5.html',
        controller: 'View5Ctrl'
    }).when('/DatabaseTestThing', {
        templateUrl: 'DatabaseTestThing/DatabaseTestThing.html',
        controller: 'DatabaseTestCtrl'
    }).when('/CoolLoginPage', {
        templateUrl: 'LoginPage/CoolLoginPage.html',
        controller: 'CoolLoginPageCtrl'
    });

    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
