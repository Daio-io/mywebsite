'use strict';

/**
 * Blog controller contains functions and data for Blog page
 * @param BlogService to request blogPosts
 * @constructor
 */
var BlogController = function (BlogService) {
    
    var blogCtrl = this;
    blogCtrl.blogPosts = BlogService.query();

};

BlogController.prototype = {

};


exports.BlogController = BlogController;