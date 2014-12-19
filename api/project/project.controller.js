'use strict';

// Handlers files are used to group your routes logically
// Require your handlers and add each route to the routes.js file

var Project = require('./project.model.js');

exports.getProject = function (req, res) {
    Project.findById(req.params.id, function (err, found) {
        if (err) {
            res.status(404).json({
                status: 'error',
                message: 'Could not find project'
            }).end();
        }
        else {
            res.json({
                name: found.name,
                description: found.description,
                platform: found.platform,
                projectURL: found.projectURL,
                imageURL: found.imageURL,
                date: found.date
            });
        }
    });
};

exports.getAllProjects = function (req, res) {
    Project.find(function (err, found) {
        if (err) {
            res.status(404).json({
                status: 'error',
                message: 'No project found'
            }).end();
        }
        else {
            res.json(found.map(function (f) {
                return {
                    name: f.name,
                    description: f.description,
                    platform: f.platform,
                    projectURL: f.projectURL,
                    imageURL: f.imageURL,
                    date: f.date
                }
            }));
        }
    });

};

exports.postProject = function (req, res) {

    var project = new Project({
        name: req.body.name,
        description: req.body.description,
        platform: req.body.platform,
        projectURL: req.body.projectURL,
        imageURL: req.body.imageURL,
        date: req.body.date
    });

    project.save(function (err, saved) {
        if (err) {
            res.status(500).json({
                status: 'error',
                message: 'Failed saving project'
            }).end();
        }
        else {
            res.json({
                id: saved._id
            });
        }
    });
};

exports.deleteProject = function (req, res) {
    Project.remove({
        _id: req.params.id
    }, function (err, result) {
        if (err) {
            res.status(404).json({
                status: 'error',
                message: 'Failed to delete: may not exist'
            }).end();
        } else {
            res.json({
                deleted: result
            });
        }
    });
};