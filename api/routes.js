var project = require('./project/project.controller.js');
var blog = require('./blog/blog.controller.js');
var router = require('express').Router();


    router.get('/hello', project.getStuff);
    ////** Project Routes **//
    //router.get('/project', project.getAllProjects);
    //router.get('/project/:id', project.getProject);
    //router.post('/project', project.postProject);
    //router.delete('/project/:id', project.deleteProject);
    //
    ////** Blog Routes **//
    //router.get('/blogs', blog.getAllBlogPosts);
    //router.get('/blogs/:id', blog.getBlogPost);
    //router.post('/blogs', blog.postBlogPost);

exports.router = router;