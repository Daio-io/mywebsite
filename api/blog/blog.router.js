'use strict';

var blog = require('./blog.controller.js');
var router = require('express').Router();

////** Blog Routes **//
router.get('/', blog.getAllBlogPosts);
router.get('/:id', blog.getBlogPost);
router.post('/', blog.postBlogPost);
router.delete('/:id', blog.deleteBlogPost);

module.exports = router;