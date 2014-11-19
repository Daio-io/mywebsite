var main = require('./handlers/main.js');
var errors = require('./handlers/errors.js');

module.exports = function (app) {
    
    app.get('/views/:directory/:file', main.partial);
    
        // ** Server Side Page Routes **
    app.use(main.index);

//    app.use(errors.error505);
//    app.use(errors.error404);

};