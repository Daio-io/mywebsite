(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Blog controller contains functions and data for Blog page
 * @param BlogService to request blogPosts
 * @constructor
 */
var BlogController = function (BlogService) {
    
    var blogCtrl = this;
    blogCtrl.blogPosts = BlogService.query();

};

BlogController.prototype = {

};


exports.BlogController = BlogController;
},{}],2:[function(require,module,exports){
'use strict';

/**
 * BlogService is used to query the backend Blog API
 * @param $resource injected to create resource API object for Blog
 * @returns {the Blog $resource service to query API}
 * @constructor
 */
var BlogService = function($resource) {
    
    var blogServ = this;
    blogServ.resource_ = $resource; 
    
    return blogServ.resource_('/api/blogs/:id', {id : '@id'} );
    
};

exports.BlogService = BlogService;
},{}],3:[function(require,module,exports){
'use strict';

/**
 * BlogDetail controller contains functions and data for individual detailed blog posts
 * @param $routeParams injected to get parameters from page URL
 * @param $sce injected to allow strings to be passed as trusted HTML
 * @param BlogService injected to query the Blog API for blogposts
 * @constructor
 */
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

    /**
     *
     * @param htmlString to convert to a safe HTML for page display
     * @returns {The trusted HTML}
     */
    renderHtml: function (htmlString) {
        return this.sce_.trustAsHtml(htmlString);
    }

};

exports.BlogDetailController = BlogDetailController;
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
'use strict';
/**
 * Main index for setting up the Angular application
 *
 */

//** CONTROLLERS
var GameCtrl = require('./game/game.controller.js');
var HomeCtrl = require('./home/home.controller.js');
var BlogCtrl = require('./blog/blog.controller.js');
var ProjectCtrl = require('./project/project.controller.js');
var AdminCtrl = require('./modules/admin/admin.controller.js');
var BlogDetailCtrl = require('./blog/blogdetail.controller.js');

//** DIRECTIVES
var ProjectDir = require('./project/projectTile.directive.js');

//** SERVICES
var ProjectServ = require('./project/project.service.js');
var BlogServ = require('./blog/blog.service.js');
var AdminServ = require('./modules/admin/admin.service.js');

var appRouteConfig = require('./config.js');

angular.module('mainapp',
    [
        'ngRoute',
        'ngResource'
    ])

    .config(['$routeProvider', '$locationProvider', appRouteConfig.config])

    .factory('ProjectService', ProjectServ.ProjectsService)
    .factory('BlogService', BlogServ.BlogService)
    .factory('AdminService', ['$resource', AdminServ.AdminService])

    .directive('projectType', ProjectDir.ProjectType)

    .controller('GameController', GameCtrl.GameController)
    .controller('HomeController', HomeCtrl.HomeController)
    .controller('BlogController', BlogCtrl.BlogController)
    .controller('BlogDetailController', BlogDetailCtrl.BlogDetailController)
    .controller('ProjectController', ProjectCtrl.ProjectController)
    .controller('AdminController', ['$scope', 'AdminService', ProjectCtrl.ProjectController]);


// Inject dependencies after
BlogCtrl.BlogController.$inject = ['BlogService'];
BlogDetailCtrl.BlogDetailController.$inject = ['$routeParams', '$sce', 'BlogService'];
ProjectCtrl.ProjectController.$inject = ['ProjectService'];

BlogServ.BlogService.$inject = ['$resource'];
ProjectServ.ProjectsService.$inject = ['$resource'];

},{"./blog/blog.controller.js":1,"./blog/blog.service.js":2,"./blog/blogdetail.controller.js":3,"./config.js":4,"./game/game.controller.js":6,"./home/home.controller.js":7,"./modules/admin/admin.controller.js":8,"./modules/admin/admin.service.js":9,"./project/project.controller.js":10,"./project/project.service.js":11,"./project/projectTile.directive.js":12}],6:[function(require,module,exports){
'use strict';

var GameController = function () {

    var gameCtrl = this;
};

GameController.prototype = {

    word: 'Looks like you will have to be bored for a bit longer. This feature is not ready yet..'

};

exports.GameController = GameController;
},{}],7:[function(require,module,exports){
'use strict';

/**
 * HomeController contains functions and data for the Home page
 * @constructor
 */
var HomeController = function () {

    var homeCtrl = this;

};

HomeController.prototype = {

    /**
     * AboutMe object data to be displayed on the home page
     */
    aboutMe: {
        name: 'Dai',
        description: 'MEAN Stack and Android Developer',
        contact: 'dle.williams1@gmail.com',
        github: 'https://github.com/daveloper87',
    }

};

exports.HomeController = HomeController;
},{}],8:[function(require,module,exports){
exports.AdminController = function ($scope, AdminService) {

    $scope.word = 'admin';

};
},{}],9:[function(require,module,exports){
exports.AdminService = function($resource) {
    
    return $resource('/login/:id', {id : '@id'} );
    
};
},{}],10:[function(require,module,exports){
'use strict';

/**
 * Project controller contains functions and data for Project page
 * @param ProjectService
 * @constructor
 */
var ProjectController = function (ProjectService) {

    var projectCtrl = this;
    projectCtrl.projectService_ = ProjectService;
    
    projectCtrl.projects = projectCtrl.projectService_.query();

};

// 
ProjectController.prototype = {
    
    
};

exports.ProjectController = ProjectController;
},{}],11:[function(require,module,exports){
'use strict';

/**
 * ProjectService is used to query the backend Project API
 * @param $resource injected to create resource API object for Projects
 * @returns {the Project $resource service to query API}
 * @constructor
 */
var ProjectsService = function($resource) {
    
    var projServ = this;
    projServ.resource_ = $resource;
    
    return projServ.resource_('/api/project/:id', {id : '@id'} );
    
};

exports.ProjectsService = ProjectsService;
},{}],12:[function(require,module,exports){
'use strict';

/**
 * ProjectTile directive is used to create a specific tyled project tile based on the project platform
 * @returns {A directive based on the platform of the project, e.g. web or Android}
 * @constructor
 */
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
},{}]},{},[5])