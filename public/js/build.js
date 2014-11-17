(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.config = function ($routeProvider, $locationProvider) {
    $routeProvider.

    when('/about', {
        templateUrl: "/views/about",
        controller: 'MainController'

    });
    
    $locationProvider.html5Mode(true);
};

//    when('/projects', {
//        controller: 'ProjectController',
//        templateUrl: 'views/projects.html'
//    }).
//
//    when('/about', {
//        controller: 'AboutController',
//        templateUrl: 'views/about.html'
//    }).
//
//    when('/blog', {
//        controller: 'BlogController',
//        templateUrl: 'views/blog.html'
//    }).
//
//    when('/blog/:id', {
//        controller: 'BlogController',
//        templateUrl: 'views/blogdetail.html'
//    }).

//'<div class="container"><div> {{word}} BBC Software Engineer. Love working with Android, Node and Angular </div><div>What I have done:</div><div>Contact me: email: github: twitter:</div></div>'
},{}],2:[function(require,module,exports){
exports.MainController = function ($scope) {

    $scope.word = 'hello';


};
},{}],3:[function(require,module,exports){
var app = angular.module('mainapp', ['ngRoute']);
var controller = require('./controllers/MainCtrl.js');

var appRouteConfig = require('./config.js');
app.config(appRouteConfig.config);

app.controller('MainController', ['$scope', controller.MainController]);

},{"./config.js":1,"./controllers/MainCtrl.js":2}]},{},[3])