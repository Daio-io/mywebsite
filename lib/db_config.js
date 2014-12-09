module.exports = {

    mongo: {
        development: {
            connectionString: 'mongodb://localhost/mysite'
        },
        test: {
            connectionString: 'mongodb://localhost/mysite_test'
        },
        production: {
            connectionString: 'mongodb://localhost/data'
        }

    }

};