(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.config = function ($routeProvider) {
    $routeProvider.

    when('/', {
        controller: MainController,
        templateUrl: 'views/main.html'
    }).

    when('/projects', {
        controller: ProjectController,
        templateUrl: 'views/projects.html'
    }).

    when('/about', {
        controller: AboutController,
        templateUrl: 'views/about.html'
    }).

    when('/blog', {
        controller: BlogController,
        templateUrl: 'views/blog.html'
    }).

    when('/blog/:id', {
        controller: BlogController,
        templateUrl: 'views/blogdetail.html'
    }).

    otherwise({
        redirectTo: '/'
    });

};
},{}],2:[function(require,module,exports){
var appRouteConfig = require('./config.js');

var app = angular.module('mainapp', ['ngRoute']);

app.config(appRouteConfig.config);
},{"./config.js":1}]},{},[2])