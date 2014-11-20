var main = require('./handlers/projects.js');

module.exports = function (app, rest) {

    //** Routes **//
    rest.get('/projects', main.getAllProjects);
    rest.get('/project/:id', main.getProject);
    rest.post('/project', main.postProject);
    rest.del('/project/:id', main.deleteProject);

};