var app = angular.module('mainapp', ['ngRoute']);
var MainCtrl = require('./controllers/MainCtrl.js');
var AboutCtrl = require('./controllers/AboutCtrl.js');
var BlogCtrl = require('./controllers/BlogCtrl.js');
var ProjectCtrl = require('./controllers/ProjectCtrl.js');

var appRouteConfig = require('./config.js');
app.config(['$routeProvider', '$locationProvider', appRouteConfig.config]);

app.controller('MainController', ['$scope', MainCtrl.MainController]);
app.controller('AboutController', ['$scope', AboutCtrl.AboutController]);
app.controller('BlogController', ['$scope', BlogCtrl.BlogController]);
app.controller('ProjectController', ['$scope', ProjectCtrl.ProjectController]);
