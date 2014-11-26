// Handlers files are used to group your routes logically
// Require your handlers and add each route to the routes.js file

var Project = require('../../models/project.js');

exports.getProject = function (req, content, callback) {
    Project.findById(req.params.id, function (err, found) {
        if (err) return callback({
            error: 'Could not find project'
        });
        callback(null, {
            name: found.name,
            description: found.description,
            projectURL: found.projectURL,
            imageURL: found.imageURL,
            date: found.date
        });
    });
};

exports.getAllProjects = function (req, content, callback) {
    Project.find(null, function (err, found) {
        if (err) return callback({
            error: 'No projects found'
        });
        callback(null, found.map(function (found) {
            return {
                name: found.name,
                description: found.description,
                projectURL: found.projectURL,
                imageURL: found.imageURL,
                date: found.date

            };
        }));

    });

};

exports.postProject = function (req, content, callback) {
    var project = new Project({
        name: req.body.name,
        description: req.body.description,
        projectURL: req.body.projectURL,
        imageURL: req.body.imageURL,
        date: req.body.date
    });

    project.save(function (err, saved) {
        if (err) return callback({
            error: 'Failed saving project'
        });
        callback(null, {
            id: saved._id
        });
    });
};

exports.deleteProject = function (req, content, callback) {
    Project.remove({
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