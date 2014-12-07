(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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
},{}],2:[function(require,module,exports){
'use strict';

var BlogController = function (BlogService) {
    
    var blogCtrl = this;
    blogCtrl.blogPosts = BlogService.query();

};

BlogController.prototype = {
    
       
};


exports.BlogController = BlogController;
},{}],3:[function(require,module,exports){
'use strict';

var BlogDetailController = function ($routeParams, $sce, BlogService) {

    var blogDetCtrl = this;
    blogDetCtrl.routeParams_ = $routeParams;
    blogDetCtrl.sce_ = $sce;
    blogDetCtrl.blogService_ = BlogService;

    blogDetCtrl.blogPost = blogDetCtrl.blogService_.get({
        id: blogDetCtrl.routeParams_.id
    });

};

BlogDetailController.prototype = {

    renderHtml: function (htmlString) {
        return this.sce_.trustAsHtml(htmlString);
    }

};

exports.BlogDetailController = BlogDetailController;
},{}],4:[function(require,module,exports){
'use strict';

var GameController = function () {

    var gameCtrl = this;
};

GameController.prototype = {

    word: 'Looks like you will have to be bored for a bit longer. This feature is not ready yet..'

};

exports.GameController = GameController;
},{}],5:[function(require,module,exports){
'use strict';

var HomeController = function () {

    var homeCtrl = this;

};

HomeController.prototype = {

    aboutMe: {
        name: 'Dai',
        description: 'MEAN Stack and Android Developer',
        contact: 'dle.williams1@gmail.com',
        github: 'https://github.com/daveloper87',
    }

};

exports.HomeController = HomeController;
},{}],6:[function(require,module,exports){
'use strict';

var ProjectController = function ($sce, ProjectService) {

    var projectCtrl = this;
    projectCtrl.sce_ = $sce;
    projectCtrl.projectService_ = ProjectService;
    
    projectCtrl.projects = projectCtrl.projectService_.query();

};

// 
ProjectController.prototype = {
    
    
};

exports.ProjectController = ProjectController;
},{}],7:[function(require,module,exports){
var ProjectType = function () {

    return {
        restrict: 'E',
        templateUrl: 'views/partial/project_tile',
        replace: false,
        scope: {
            project: '=projectObject',
        },
        link: function (scope, elems, attrs) {

            scope.proj = scope.$eval(attrs.projectObject);

            var pF = scope.proj.platform.toUpperCase();

            if (pF === 'ANDROID') {

                scope.icon = 'android_icon.png';
                scope.css = 'tile-android';

            } else if (pF === 'WEB') {

                scope.icon = 'web_icon.png';
                scope.css = 'tile-web';
            }

        }

    };
};

exports.ProjectType = ProjectType;
},{}],8:[function(require,module,exports){
'use strict';

//** CONTROLLERS
var GameCtrl = require('./controllers/GameCtrl.js');
var HomeCtrl = require('./controllers/HomeCtrl.js');
var BlogCtrl = require('./controllers/BlogCtrl.js');
var ProjectCtrl = require('./controllers/ProjectCtrl.js');
var AdminCtrl = require('./modules/admin/admin.controller.js');
var BlogDetailCtrl = require('./controllers/BlogDetailCtrl.js');

//** DIRECTIVES
var ProjectDir = require('./directives/project_type.directive.js');

//** SERVICES
var ProjectServ =  require('./services/ProjectService.js');
var BlogServ =  require('./services/BlogService.js');
var AdminServ = require('./modules/admin/admin.service.js');

var appRouteConfig = require('./config.js');

angular.module('mainapp', ['ngRoute', 'ngResource'])
.config(['$routeProvider', '$locationProvider', appRouteConfig.config])
.factory('ProjectService', ['$resource', ProjectServ.ProjectsService])
.factory('BlogService', ['$resource', BlogServ.BlogService])
.factory('AdminService', ['$resource', AdminServ.AdminServiceService])

.directive('projectType', ProjectDir.ProjectType)

.controller('GameController', GameCtrl.GameController)
.controller('HomeController', HomeCtrl.HomeController)
.controller('BlogController', BlogCtrl.BlogController)
.controller('BlogDetailController', BlogDetailCtrl.BlogDetailController)
.controller('ProjectController', ProjectCtrl.ProjectController)
.controller('AdminController', ['$scope', 'AdminService', ProjectCtrl.ProjectController]);


// Inject dependancies after
BlogCtrl.BlogController.$inject = ['BlogService'];
BlogDetailCtrl.BlogDetailController.$inject = ['$routeParams', '$sce', 'BlogService'];
ProjectCtrl.ProjectController.$inject = ['$sce', 'ProjectService'];

},{"./config.js":1,"./controllers/BlogCtrl.js":2,"./controllers/BlogDetailCtrl.js":3,"./controllers/GameCtrl.js":4,"./controllers/HomeCtrl.js":5,"./controllers/ProjectCtrl.js":6,"./directives/project_type.directive.js":7,"./modules/admin/admin.controller.js":9,"./modules/admin/admin.service.js":10,"./services/BlogService.js":11,"./services/ProjectService.js":12}],9:[function(require,module,exports){
exports.AdminController = function ($scope, AdminService) {

    $scope.word = 'admin';

};
},{}],10:[function(require,module,exports){
exports.AdminService = function($resource) {
    
    return $resource('/login/:id', {id : '@id'} );
    
};
},{}],11:[function(require,module,exports){
exports.BlogService = function($resource) {
    
    return $resource('/api/blogs/:id', {id : '@id'} );
    
};
},{}],12:[function(require,module,exports){
exports.ProjectsService = function($resource) {
    
    return $resource('/api/projects/:id', {id : '@id'} );
    
};
},{}]},{},[8])