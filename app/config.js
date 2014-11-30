exports.config = function ($routeProvider, $locationProvider) {
    $routeProvider.

    when('/', {
        controller: 'MainController',
        templateUrl: "/views/partial/main"

    }).
    
    when('/about', {
        controller: 'AboutController',
        templateUrl: "/views/partial/about"

    }).    
    when('/admin', {
        controller: 'AdminController',
        templateUrl: "/views/partial/admin"

    }).
    
    when('/projects', {
        controller: 'ProjectController',
        templateUrl: 'views/partial/projects'
    }).
    
    when('/projects/:id', {
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