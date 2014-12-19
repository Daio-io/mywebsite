'use strict';

var project = require('./project.controller.js');
var router = require('express').Router();

//** Project Routes **//
router.get('/', project.getAllProjects);
router.get('/:id', project.getProject);
router.post('/', project.postProject);
router.delete('/:id', project.deleteProject);

////** Blog Routes **//
//router.get('/blogs', blog.getAllBlogPosts);
//router.get('/blogs/:id', blog.getBlogPost);
//router.post('/blogs', blog.postBlogPost);

exports.router = router;