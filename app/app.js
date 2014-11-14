var appRouteConfig = require('./config.js');

var app = angular.module('mainapp', ['ngRoute']):

app.config(appRouteConfig.config);