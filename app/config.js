exports.config = function ($routeProvider, $locationProvider) {
    $routeProvider.

    when('/about', {
        templateUrl: "/views/about",
        controller: 'MainController'

    });
    
    $locationProvider.html5Mode(true);
};

//    when('/projects', {
//        controller: 'ProjectController',
//        templateUrl: 'views/projects.html'
//    }).
//
//    when('/about', {
//        controller: 'AboutController',
//        templateUrl: 'views/about.html'
//    }).
//
//    when('/blog', {
//        controller: 'BlogController',
//        templateUrl: 'views/blog.html'
//    }).
//
//    when('/blog/:id', {
//        controller: 'BlogController',
//        templateUrl: 'views/blogdetail.html'
//    }).

//'<div class="container"><div> {{word}} BBC Software Engineer. Love working with Android, Node and Angular </div><div>What I have done:</div><div>Contact me: email: github: twitter:</div></div>'