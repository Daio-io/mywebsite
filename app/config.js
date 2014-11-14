exports.config = function ($routeProvider) {
    $routeProvider.

    when('/', {
        controller: MainController,
        templateUrl: 'views/main.html'
    }).

    when('/projects', {
        controller: ProjectController,
        templateUrl: 'views/projects.html'
    }).

    when('/about', {
        controller: AboutController,
        templateUrl: 'views/about.html'
    }).

    when('/blog', {
        controller: BlogController,
        templateUrl: 'views/blog.html'
    }).

    when('/blog/:id', {
        controller: BlogController,
        templateUrl: 'views/blogdetail.html'
    }).

    otherwise({
        redirectTo: '/'
    });

};