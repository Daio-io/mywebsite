var expect = require('chai').expect;
var BlogService = require('../../Services/BlogService.js');

suite('BlogService test', function () {
    
    var BlogServ;
    
    setup(function () {

        //need to stub resource
        BlogServ = new BlogService.BlogService(resource);
    });

    //Placeholder test
    test('Should return a blogpost resource object', function (done) {

        //Placeholder expect
        expect(BlogServ.query()).to.exist;
        done();
        
    });
    
});