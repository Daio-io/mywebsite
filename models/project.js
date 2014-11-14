// Require mongoose
var mongoose = require('mongoose');
var projectSchema = mongoose.Schema({
    name: String, 
    description: String, 
    projectURL: String, 
    imageURL: String,
    date: Date

});

var Project = mongoose.model('Project', projectSchema); // create a model using Mongoose - at this point Sample becomes like a class
module.exports = Project; // add the Sample object to exports this can then be imported like this
// var Sample = require('./models/sample.js');