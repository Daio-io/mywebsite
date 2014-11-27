(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
        controller: 'BlogController',
        templateUrl: 'views/partial/blogdetail'
    }).
    
    otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
};
},{}],2:[function(require,module,exports){
var AboutController = function ($scope) {

    $scope.word = 'About';
    
};

exports.AboutController = AboutController;
},{}],3:[function(require,module,exports){
exports.BlogController = function ($scope, BlogService) {

    $scope.word = 'Blog';


};
},{}],4:[function(require,module,exports){
exports.MainController = function ($scope) {

    $scope.word = 'home';

};
},{}],5:[function(require,module,exports){
exports.ProjectController = function ($scope, ProjectService) {

    $scope.projects = ProjectService.query();

    
};
},{}],6:[function(require,module,exports){
var app = angular.module('mainapp', ['ngRoute', 'ngResource']);
//** CONTROLLERS
var MainCtrl = require('./controllers/MainCtrl.js');
var AboutCtrl = require('./controllers/AboutCtrl.js');
var BlogCtrl = require('./controllers/BlogCtrl.js');
var ProjectCtrl = require('./controllers/ProjectCtrl.js');

//** SERVICES
var ProjectServ =  require('./services/ProjectService.js');
var BlogServ =  require('./services/BlogService.js');

var appRouteConfig = require('./config.js');
app.config(['$routeProvider', '$locationProvider', appRouteConfig.config]);

app.factory('ProjectService', ['$resource', ProjectServ.ProjectsService]);

app.controller('MainController', ['$scope', MainCtrl.MainController]);
app.controller('AboutController', ['$scope', AboutCtrl.AboutController]);
app.controller('BlogController', ['$scope', 'BlogService', BlogCtrl.BlogController]);
app.controller('ProjectController', ['$scope', 'ProjectService', ProjectCtrl.ProjectController]);



},{"./config.js":1,"./controllers/AboutCtrl.js":2,"./controllers/BlogCtrl.js":3,"./controllers/MainCtrl.js":4,"./controllers/ProjectCtrl.js":5,"./services/BlogService.js":7,"./services/ProjectService.js":8}],7:[function(require,module,exports){
exports.BlogService = function($resource) {
    
    return $resource('/api/blogs/:id', {id : '@id'} );
    
};
},{}],8:[function(require,module,exports){
exports.ProjectsService = function($resource) {
    
    return $resource('/api/projects/:id', {id : '@id'} );
    
};
},{}]},{},[6])