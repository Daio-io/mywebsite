'use strict';

module.exports = {

    mongo: {
        development: {
            connectionString: 'mongodb://localhost/mysite'
        },
        test: {
            connectionString: 'mongodb://localhost/mysite_test'
        },
        production: {
            connectionString: 'mongodb://'+ process.env.DB_USER +':'+ process.env.DB_PASS +'@ds037551.mongolab.com:37551/daveloper'
        }

    }

};