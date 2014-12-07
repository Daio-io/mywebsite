var assert = require('chai').assert;
var expect = require('chai').expect;
var HomeController = require('../app/controllers/HomeCtrl.js');

suite('Home Controller test', function () {
    
    var HomeCtrl;
    
    setup(function () {

        HomeCtrl = new HomeController.HomeController();
    });

    test('should be able to send and add a blog post to the API', function (done) {

        expect(HomeCtrl.aboutMe.name).to.equal('Dassai');
        done();
        
    });

    
});