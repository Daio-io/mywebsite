// Require mongoose
var mongoose = require('mongoose');
var blogPostSchema = mongoose.Schema({
    title: String, 
    short: String,
    full: String
});

var BlogPost = mongoose.model('BlogPost', blogPostSchema); // create a model using Mongoose - at this point Sample becomes like a class
module.exports = BlogPost; // add the Blog object to exports this can then be imported like this