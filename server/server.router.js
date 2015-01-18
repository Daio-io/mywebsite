'use strict';

var serverRoutes = require('./server.handlers');
var router = require('express').Router();

router.get('/views/:directory/:file', serverRoutes.partial);

// ** Server Side Page Routes ** //
// Should only serve one page and let Angular handle routing on client

router.use(serverRoutes.index);

module.exports = router;
