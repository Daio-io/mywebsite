'use strict';
// Handlers files are used to group your routes logically
// Require your handlers and add each route to the routes.js file

var BlogPost = require('./blog.model.js');

exports.getBlogPost = function (req, res) {
    BlogPost.findById(req.params.id, function (err, found) {
        if (err) {
            res.status(404).json({
                status: 'error',
                message: 'Could not find BlogPost'
            }).end();
        } else {
            res.json({
                id: found._id,
                title: found.title,
                short: found.short,
                full: found.full,
                dateCreated: found.getDateCreated()
            });
        }
    });
};

exports.getAllBlogPosts = function (req, res) {
    BlogPost.find(null, function (err, found) {
        if (err) {
            res.status(404).json({
                status: 'error',
                message: 'No BlogPosts found'
            }).end();
        }
        else {
            res.json(found.map(function (found) {
                return {
                    id: found._id,
                    title: found.title,
                    short: found.short,
                    full: found.full,
                    dateCreated: found.getDateCreated()
                };
            }));
        }
    });

};

exports.postBlogPost = function (req, res) {
    var blogPost = new BlogPost({
        title: req.body.title,
        short: req.body.short,
        full: req.body.full
    });

    blogPost.save(function (err, saved) {
        if (err) {
            res.status(500).json({
                status: 'error',
                message: 'failed saving BlogPost'
            }).end();
        }
        else {
            res.json({
                id: saved._id
            });
        }
    });
};

exports.deleteBlogPost = function (req, res) {
    BlogPost.remove({
        _id: req.params.id
    }, function (err, result) {
        if (err) {
            res.status(404).json({
                status: 'error',
                message: 'Failed to delete. May not exist'
            }).end();
        }
        else {
            res.json({
                deleted: result
            });
        }
    });
};