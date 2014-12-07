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
        controller: 'GameController',
        templateUrl: "/views/partial/404"
    }).
    
    when('/projects', {
        controller: 'ProjectController',
        templateUrl: 'views/partial/projects'
    }).
    
    when('/blog', {
        controller: 'BlogController',
        templateUrl: 'views/partial/blog'
    }).

    when('/blog/:id', {
        controller: 'BlogDetailController',
        templateUrl: 'views/partial/blogdetail'
    }).
    
    otherwise({
        templateUrl: 'views/partial/404'
    });

    $locationProvider.html5Mode(true);
};