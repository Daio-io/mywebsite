'use strict';
// Require mongoose
var mongoose = require('mongoose');
var blogPostSchema = mongoose.Schema({
    title: String,
    short: String,
    full: String
});

blogPostSchema.methods.getDateCreated = function () {
    var date = this._id.getTimestamp().getUTCDate();
    var month = this._id.getTimestamp().getUTCMonth() + 1; // Month starts at 0
    var year = this._id.getTimestamp().getUTCFullYear();

    return date + '-' + month + '-' + year;
};

var BlogPost = mongoose.model('BlogPost', blogPostSchema); // create a model using Mongoose - at this point Sample becomes like a class
module.exports = BlogPost; // add the Blog object to exports this can then be imported like this