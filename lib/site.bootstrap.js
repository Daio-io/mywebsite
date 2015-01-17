'use strict';

module.exports = function (app) {

    // ** ROUTING ** //
    // API
    var baseUrl = '/api';
    var projectRouter = require('../api/project/project.router');
    var blogRouter = require('../api/blog/blog.router');

    // SERVER
    var serverRouter = require('../server/server.router');

    // ** DOMAIN SETUP ** //
    var siteDomain = require('./site_domain');

    // Register Router for API
    app.use(baseUrl + '/project', projectRouter);
    app.use(baseUrl + '/blogs', blogRouter);
    // Register routes for Server
    app.use('/', serverRouter);

    // Set view engine
    app.set('view engine', 'ejs');

    // Register Domain
    app.use(siteDomain);

};