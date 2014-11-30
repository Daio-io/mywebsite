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
        controller: 'BlogController',
        templateUrl: 'views/partial/blogdetail'
    }).
    
    otherwise({
        templateUrl: 'views/partial/404'
    });

    $locationProvider.html5Mode(true);
};
},{}],2:[function(require,module,exports){
var AboutController = function ($scope) {

    $scope.word = 'About';
    
};

exports.AboutController = AboutController;
},{}],3:[function(require,module,exports){
var BlogController = function ($scope, BlogService) {

    $scope.word = 'Blog';

    $scope.renderHtml = function (html_code) {
        return $sce.trustAsHtml(html_code);
    };
};

exports.BlogController = BlogController;
},{}],4:[function(require,module,exports){
var MainController = function ($scope) {

    $scope.word = 'home';

};

exports.MainController = MainController;
},{}],5:[function(require,module,exports){
var ProjectController = function ($scope, $sce, ProjectService) {

    $scope.projects = ProjectService.query();

    
    //Todo, move these into directives ** Needs refactor 
    $scope.platformImage = function (platform) {

        var pF = platform.toUpperCase();

        if (pF === 'ANDROID') {

            return 'android_icon.png';
        } else if (pF === 'WEB') {

            return 'web_icon.png';
        }

    };
    
    $scope.platformType = function (platform) {

        var pF = platform.toUpperCase();

        if (pF === 'ANDROID') {

            return 'tile-android';
            
        } else if (pF === 'WEB') {

            return 'tile-web';
        }

    };
    

};

exports.ProjectController = ProjectController;
},{}],6:[function(require,module,exports){
var app = angular.module('mainapp', ['ngRoute', 'ngResource']);
//** CONTROLLERS
var MainCtrl = require('./controllers/MainCtrl.js');
var AboutCtrl = require('./controllers/AboutCtrl.js');
var BlogCtrl = require('./controllers/BlogCtrl.js');
var ProjectCtrl = require('./controllers/ProjectCtrl.js');
var AdminCtrl = require('./modules/admin/admin.controller.js');

//** SERVICES
var ProjectServ =  require('./services/ProjectService.js');
var BlogServ =  require('./services/BlogService.js');
var AdminServ = require('./modules/admin/admin.service.js');

var appRouteConfig = require('./config.js');
app.config(['$routeProvider', '$locationProvider', appRouteConfig.config]);

app.factory('ProjectService', ['$resource', ProjectServ.ProjectsService]);
app.factory('BlogService', ['$resource', BlogServ.BlogService]);
app.factory('AdminService', ['$resource', AdminServ.AdminServiceService]);

app.controller('MainController', ['$scope', MainCtrl.MainController]);
app.controller('AboutController', ['$scope', AboutCtrl.AboutController]);
app.controller('BlogController', ['$scope', 'BlogService', BlogCtrl.BlogController]);
app.controller('ProjectController', ['$scope', '$sce', 'ProjectService', ProjectCtrl.ProjectController]);
app.controller('AdminController', ['$scope', 'AdminService', ProjectCtrl.ProjectController]);



},{"./config.js":1,"./controllers/AboutCtrl.js":2,"./controllers/BlogCtrl.js":3,"./controllers/MainCtrl.js":4,"./controllers/ProjectCtrl.js":5,"./modules/admin/admin.controller.js":7,"./modules/admin/admin.service.js":8,"./services/BlogService.js":9,"./services/ProjectService.js":10}],7:[function(require,module,exports){
exports.AdminController = function ($scope, AdminService) {

    $scope.word = 'admin';

};
},{}],8:[function(require,module,exports){
exports.AdminService = function($resource) {
    
    return $resource('/login/:id', {id : '@id'} );
    
};
},{}],9:[function(require,module,exports){
exports.BlogService = function($resource) {
    
    return $resource('/api/blogs/:id', {id : '@id'} );
    
};
},{}],10:[function(require,module,exports){
exports.ProjectsService = function($resource) {
    
    return $resource('/api/projects/:id', {id : '@id'} );
    
};
},{}]},{},[6])