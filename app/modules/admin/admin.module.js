var AdminCtrl = require('./adming.controller.js');
var AdminServ = require('./adming.service.js');

var adminApp = angular.module('adminApp', ['ngResource']);

adminApp.service('AdminService'. ['$scope', AdminServ.AdminService]);
adminApp.controller('AdminCtrl'. ['$scope', 'AdminService', AdminCtrl.AdminController]);
