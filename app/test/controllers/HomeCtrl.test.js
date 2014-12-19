'use strict';

var expect = require('chai').expect;
var HomeController = require('../../home/home.controller.js');

suite('HomeController test', function () {
    
    var HomeCtrl;
    
    setup(function () {

        HomeCtrl = new HomeController.HomeController();
    });

    test('should have a name defined', function (done) {

        expect(HomeCtrl.aboutMe.name).to.exist;
        done();
        
    });
    
    test('should have a description defined', function (done) {

        expect(HomeCtrl.aboutMe.description).to.exist;
        done();
        
    });
    test('should have a contact email address defined', function (done) {

        expect(HomeCtrl.aboutMe.contact).to.exist;
        done();
        
    });
    test('should have a GitHub account defined', function (done) {

        expect(HomeCtrl.aboutMe.github).to.exist;
        done();
        
    });

    
});