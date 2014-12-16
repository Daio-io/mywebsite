'use strict';

var BlogController = function (BlogService) {
    
    var blogCtrl = this;
    blogCtrl.blogPosts = BlogService.query();

};

BlogController.prototype = {

};


exports.BlogController = BlogController;