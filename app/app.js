var app = angular.module('mainapp', ['ngRoute', 'ngResource']);
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
app.config(['$routeProvider', '$locationProvider', appRouteConfig.config]);

app.factory('ProjectService', ['$resource', ProjectServ.ProjectsService]);
app.factory('BlogService', ['$resource', BlogServ.BlogService]);
app.factory('AdminService', ['$resource', AdminServ.AdminServiceService]);

app.directive('projectType', ProjectDir.ProjectType);

app.controller('GaneController', ['$scope', GameCtrl.GameController]);
app.controller('HomeController', ['$scope', HomeCtrl.HomeController]);
app.controller('BlogController', ['$scope', 'BlogService', BlogCtrl.BlogController]);
app.controller('BlogDetailController', ['$scope', '$routeParams', '$sce', 'BlogService', BlogDetailCtrl.BlogDetailController]);
app.controller('ProjectController', ['$scope', '$sce', 'ProjectService', ProjectCtrl.ProjectController]);
app.controller('AdminController', ['$scope', 'AdminService', ProjectCtrl.ProjectController]);


