module.exports = {

    mongo: {
        test: {
            connectionString: 'mongodb://localhost/mysite_test'
        },
        development: {
            connectionString: 'mongodb://localhost/mysite'
        },
        production: {
            connectionString: 'mongodb://localhost/data'
        }

    }

};