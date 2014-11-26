var mongoose = require('mongoose');
var projectSchema = mongoose.Schema({
    name: String, 
    description: String, 
    projectURL: String, 
    imageURL: String,
    date: String

});

var Project = mongoose.model('Project', projectSchema);
module.exports = Project;