var expect = require('chai').expect;
var BlogDetailController = require('../../controllers/BlogDetailCtrl.js');

suite('BlogDetailController test', function () {
    
    var BlogDetCtrl;
    
    setup(function () {

        //need to stub BlogService
        BlogDetCtrl = new BlogDetailController.BlogDetailController(BlogService);
    });

    //Placeholder test
    test('should return a blog post', function (done) {

        //Placeholder expect
        expect(BlogDetCtrl.blogPost).to.exist;
        done();
        
    });
    
});