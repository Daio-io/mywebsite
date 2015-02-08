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
var BlogDetailCtrl = require('./blog/blogdetail.controller.js');

//** DIRECTIVES
var ProjectDir = require('./project/projectTile.directive.js');

//** SERVICES
var ProjectServ = require('./project/project.service.js');
var BlogServ = require('./blog/blog.service.js');

//** FILTERS
var Filters = require('./filters/filters.js');

var appRouteConfig = require('./config.js');

angular.module('mainapp',
    [
        'ngRoute',
        'ngResource'
    ])

    .config(['$routeProvider', '$locationProvider', appRouteConfig.config])

    .factory('ProjectService', ProjectServ.ProjectsService)
    .factory('BlogService', BlogServ.BlogService)

    .directive('projectType', ProjectDir.ProjectType)

    .controller('GameController', GameCtrl.GameController)
    .controller('HomeController', HomeCtrl.HomeController)
    .controller('BlogController', BlogCtrl.BlogController)
    .controller('BlogDetailController', BlogDetailCtrl.BlogDetailController)
    .controller('ProjectController', ProjectCtrl.ProjectController)

    .filter('reverse', Filters.reverse);

// Inject dependencies after
BlogCtrl.BlogController.$inject = ['BlogService'];
BlogDetailCtrl.BlogDetailController.$inject = ['$routeParams', '$sce', 'BlogService'];
ProjectCtrl.ProjectController.$inject = ['ProjectService'];

BlogServ.BlogService.$inject = ['$resource'];
ProjectServ.ProjectsService.$inject = ['$resource'];
