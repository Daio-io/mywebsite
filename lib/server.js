'use strict';
var http = require('http');

module.exports = function (app) {

    //Set the port as the env set variable or default to 3000 if it does not exist
    app.set('port', process.env.PORT || 3000);

    function startServer() {
        http.createServer(app).listen(app.get('port'), function () {
            console.log('App Started..');

        });
    }

    if (require.main === module) {
        //application run directly then start the server
        startServer();

    } else {
        // if the application is imported via require export function 
        // to create server add to exports
        module.exports = startServer();

    }
};