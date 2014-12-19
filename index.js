var express = require('express');
var app = express();
var projectRouter = require('./api/project/project.router.js');
require('./lib/domain.js')(app); // set up a domain for the app

app.use(express.static(__dirname + '/public')); // serve this content to the client without special handling (static)
require('./lib/middleware.js')(app); // app middleware in here

require('./lib/environment_context.js')(app);

app.use('/api/project', projectRouter.router);
//app.use('/blog', apiRouter.router);

// ** UPDATE db_config.js FOR CONNECTION STRINGS TO DATABASE **
require('./lib/database_connection.js')(app);

require('./lib/server.js')(app);
require('./express/routes.js')(app);