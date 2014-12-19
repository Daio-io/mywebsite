'use strict';

module.exports = function (app) {

    var baseUrl = '/api';
    var projectRouter = require('../api/project/project.router.js');
    var blogRouter = require('../api/blog/blog.router.js');

    // Register Router for API
    app.use(baseUrl + '/project', projectRouter.router);
    app.use(baseUrl + '/blogs', blogRouter.router);

};