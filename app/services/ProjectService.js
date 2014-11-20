exports.ProjectsService = function($resource) {
    
    return $resource('/api/projects/:id', {id : '@id'} );
    
};