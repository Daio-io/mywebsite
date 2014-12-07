var expect = require('chai').expect;
var BlogController = require('../../controllers/BlogCtrl.js');

suite('BlogController test', function () {
    
    var BlogCtrl;
    
    setup(function () {

        //need to stub BlogService
        BlogCtrl = new BlogController.BlogController(BlogService);
    });

    //Placeholder test
    test('should have a list of blog posts', function (done) {

        //Placeholder expect
        expect(BlogCtrl.blogPosts).to.exist;
        done();
        
    });
    
});