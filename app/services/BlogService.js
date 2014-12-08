'use strict';

var BlogService = function($resource) {
    
    var blogServ = this;
    blogServ.resource_ = $resource; 
    
    return blogServ.resource_('/api/blogs/:id', {id : '@id'} );
    
};

exports.BlogService = BlogService;