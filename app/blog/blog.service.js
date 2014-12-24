'use strict';

/**
 * BlogService is used to query the backend Blog API
 * @param $resource injected to create resource API object for Blog
 * @returns {the Blog $resource service to query API}
 * @constructor
 */
var BlogService = function($resource) {
    
    var blogServ = this;
    blogServ.resource_ = $resource; 
    
    return blogServ.resource_('/api/blogs/:id', {id : '@id'} );
    
};

exports.BlogService = BlogService;