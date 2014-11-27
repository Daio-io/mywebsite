var main = require('./handlers/main.js');
var errors = require('./handlers/errors.js');

module.exports = function (app) {

    app.get('/views/:directory/:file', main.partial);
    app.get('/admin', main.admin);

    // ** Server Side Page Routes 
    // Should only serve one page and let Angular handle routing on client

    app.use(main.index);

};