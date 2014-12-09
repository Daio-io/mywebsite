'use strict';

var expect = require('chai').expect;
var BlogDetailController = require('../../controllers/BlogDetailCtrl.js');

suite('BlogDetailController test', function () {

    var BlogDetCtrl;
    var blogServStub;
    //Mocking $sce for the constructor
    var $sce = {};
    //Mocking $routeParams to contain an id for the BlogService  
    var $routeParams = {
        id: 'id'
    };

    setup(function () {

        blogServStub = require('../stubs/BlogService.stub.js').BlogStub;

        BlogDetCtrl = new BlogDetailController.BlogDetailController($routeParams, $sce, blogServStub);
    });

    //Placeholder test
    test('should blogPost should be defined on scope', function (done) {

        //Placeholder expect
        expect(BlogDetCtrl.blogPost.id).to.exist;
        expect(BlogDetCtrl.blogPost.title).to.exist;
        expect(BlogDetCtrl.blogPost.short).to.exist;
        expect(BlogDetCtrl.blogPost.full).to.exist;
        done();

    });

    // Implementation test - marked as pending
    test('should convert full blogPost body into html - renderHtml()');

});