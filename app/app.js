var app = angular.module('mainapp', ['ngRoute']);
var controller = require('./controllers/MainCtrl.js');

var appRouteConfig = require('./config.js');
app.config(appRouteConfig.config);

app.controller('MainController', ['$scope', controller.MainController]);
