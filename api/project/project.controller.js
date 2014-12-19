// Handlers files are used to group your routes logically
// Require your handlers and add each route to the routes.js file

var Project = require('./project.model.js');

exports.getProject = function (req, content, callback) {
    Project.findById(req.params.id, function (err, found) {
        if (err) return callback({
            error: 'Could not find project'
        });
        callback(null, {
            name: found.name,
            description: found.description,
            platform: found.platform,
            projectURL: found.projectURL,
            imageURL: found.imageURL,
            date: found.date
        });
    });
};

exports.getAllProjects = function (req, content, callback) {
    Project.find(null, function (err, found) {
        if (err) return callback({
            error: 'No project found'
        });
        callback(null, found.map(function (found) {
            return {
                name: found.name,
                description: found.description,
                platform: found.platform,
                projectURL: found.projectURL,
                imageURL: found.imageURL,
                date: found.date

            };
        }));

    });

};

exports.postProject = function (req, content, callback) {
    
    var project = new Project({
        name: content.name,
        description: content.description,
        platform: content.platform,
        projectURL: content.projectURL,
        imageURL: content.imageURL,
        date: content.date
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