// Handlers files are used to group your routes logically
// Require your handlers and add each route to the routes.js file

var BlogPost = require('../../models/blogpost.js');

exports.getBlogPost = function (req, content, callback) {
    BlogPost.findById(req.params.id, function (err, found) {
        if (err) return callback({
            error: 'Could not find BlogPost'
        });
        callback(null, {
            title: found.title,
            content: found.content,
            iconURL: found.iconURL,
            datePublished: found.datePublished
        });
    });
};

exports.getAllBlogPosts = function (req, content, callback) {
    BlogPost.find(null, function (err, found) {
        if (err) return callback({
            error: 'No blogposts found'
        });
        callback(null, found.map(function (found) {
            return {
                title: found.title,
                content: found.content,
                iconURL: found.iconURL,
                datePublished: found.datePublished

            };
        }));

    });

};

exports.postBlogPost = function (req, content, callback) {
    var blogPost = new BlogPost({
        title: req.body.title,
        content: req.body.content,
        iconURL: req.body.iconURL,
        datePublished: req.body.datePublished
    });

    blogPost.save(function (err, saved) {
        if (err) return callback({
            error: 'Failed saving blogpost'
        });
        callback(null, {
            id: saved._id
        });
    });
};

exports.deleteBlogPost = function (req, content, callback) {
    BlogPost.remove({
        _id: req.params.id
    }, function (err, result) {
        if (err) return callback({
            error: 'Failed to delete: may not exist'
        });
        callback(null, {
            deleted: result
        });

    });
};