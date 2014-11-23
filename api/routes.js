var project = require('./handlers/projects.js');
var blog = require('./handlers/blog.js');

module.exports = function (app, rest) {

    //** Project Routes **//
    rest.get('/projects', project.getAllProjects);
    rest.get('/project/:id', project.getProject);
    rest.post('/project', project.postProject);
    rest.del('/project/:id', project.deleteProject);    
    
    //** Blog Routes **//
    rest.get('/blogs', blog.getAllBlogPosts);
    rest.get('/blogs/:id', blog.getBlogPost);
    rest.post('/blogs', blog.postBlogPost);
    rest.del('/blogs/:id', blog.deleteBlogPost);

};