'use strict';

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public')); // serve this content to the client without special handling (static)
require('./lib/middleware.js')(app); // app middleware in here

require('./lib/environment_context.js')(app);

require('./lib/site.bootstrap.js')(app);

// ** UPDATE db_config.js FOR CONNECTION STRINGS TO DATABASE **
require('./lib/database_connection.js')(app);

require('./lib/server.js')(app);