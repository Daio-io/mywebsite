'use strict';

/**
 * ProjectService is used to query the backend Project API
 * @param $resource injected to create resource API object for Projects
 * @returns {the Project $resource service to query API}
 * @constructor
 */
var ProjectsService = function($resource) {
    
    var projServ = this;
    projServ.resource_ = $resource;
    
    return projServ.resource_('/api/project/:id', {id : '@id'} );
    
};

exports.ProjectsService = ProjectsService;