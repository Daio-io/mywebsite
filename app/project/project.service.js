'use strict';

var ProjectsService = function($resource) {
    
    var projServ = this;
    projServ.resource_ = $resource;
    
    return projServ.resource_('/api/project/:id', {id : '@id'} );
    
};

exports.ProjectsService = ProjectsService;