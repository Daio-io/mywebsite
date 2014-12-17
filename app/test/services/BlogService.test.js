'use strict'; 

var expect = require('chai').expect;
var BlogService = require('../../blog/blog.service.js');

suite('BlogService test', function () {
    
    var BlogServ;
    
    setup(function () {

        //need to stub resource
        BlogServ = new blog.BlogService(resource);
    });

    test('Should return a blogpost resource object');
    
});