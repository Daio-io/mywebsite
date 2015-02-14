'use strict';
// Require mongoose
var mongoose = require('mongoose');
var blogPostSchema = mongoose.Schema({
    title: String,
    short: String,
    full: String
});

blogPostSchema.methods.getDateCreated = function () {
    var timeStamp = this._id.getTimestamp();
    var date = timeStamp.getUTCDate();
    var month = timeStamp.getUTCMonth() + 1; // Month starts at 0
    var year = timeStamp.getUTCFullYear();

    return date + '-' + month + '-' + year;
};

var BlogPost = mongoose.model('BlogPost', blogPostSchema); // create a model using Mongoose - at this point Sample becomes like a class
module.exports = BlogPost; // add the Blog object to exports this can then be imported like this