'use strict';

var expect = require('chai').expect;
var BlogController = require('../../controllers/BlogCtrl.js');

suite('BlogController test', function () {

    var BlogCtrl;
    var blogServStub;

    setup(function () {

        blogServStub = require('../stubs/BlogService.stub.js').BlogStub;

        //need to stub BlogService
        BlogCtrl = new BlogController.BlogController(blogServStub);
    });

   test('should have array of blogPosts defined on scope', function (done) {

        for (var i = 0; i < BlogCtrl.blogPosts.length; i++) {
            expect(BlogCtrl.blogPosts[i].id).to.exist;
            expect(BlogCtrl.blogPosts[i].title).to.exist;
            expect(BlogCtrl.blogPosts[i].short).to.exist;
            expect(BlogCtrl.blogPosts[i].full).to.exist;

        }

        done();

    });
});