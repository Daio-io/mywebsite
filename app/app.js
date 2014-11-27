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


