var main = require('./handlers/main.js');
var errors = require('./handlers/errors.js');

module.exports = function (app) {
    // ** Server Side Page Routes **
    app.get('/*', main.index);

//    app.use(errors.error505);
//    app.use(errors.error404);

};