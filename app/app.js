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
.controller('BlogDetailController', ['$scope', '$routeParams', '$sce', 'BlogService', BlogDetailCtrl.BlogDetailController])
.controller('ProjectController', ['$scope', '$sce', 'ProjectService', ProjectCtrl.ProjectController])
.controller('AdminController', ['$scope', 'AdminService', ProjectCtrl.ProjectController]);


// Inject dependancies after
BlogCtrl.BlogController.$inject = ['BlogService'];
