'use strict';

/**
 * Config controls the applications routing to different pages
 * @param $routeProvider injected to set up the routes for the application
 * @param $locationProvider injected to set the applications to html5 mode
 */

exports.config = function ($routeProvider, $locationProvider) {
    $routeProvider.

    when('/', {
        controller: 'HomeController as homeCtrl',
        templateUrl: "/views/partial/home"
    }).
    
    when('/admin', {
        controller: 'AdminController',
        templateUrl: "/views/partial/admin"
    }).
        
    when('/bored', {
        controller: 'GameController as gameCtrl',
        templateUrl: "/views/partial/404"
    }).
    
    when('/projects', {
        controller: 'ProjectController as projectCtrl',
        templateUrl: 'views/partial/projects'
    }).
    
    when('/blog', {
        controller: 'BlogController as blogCtrl',
        templateUrl: 'views/partial/blog'
    }).

    when('/blog/:id', {
        controller: 'BlogDetailController as blogDetCtrl',
        templateUrl: 'views/partial/blogdetail'
    }).

    otherwise({
        templateUrl: 'views/partial/404'
    });

    $locationProvider.html5Mode(true);
};