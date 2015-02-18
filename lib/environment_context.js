'use strict';

module.exports = function (app) {
    // creating a switch to add environment specifics such as different logging in this case
    switch (app.get('env')) {
    case 'development':
        //compact colorful dev logging
        app.use(require('morgan')('dev'));
        break;
        case 'production':

        // set up prerender.io in live
        app.use(require('prerender-node').set('prerenderToken', process.env.PRERENDER_TOKEN ));

        //module server-logger supo=ports daily rotations
        app.use(require('express-logger')({
            path: __dirname + '/log/requests.log'
        }));
        break;
    }

};