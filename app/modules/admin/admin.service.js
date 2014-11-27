exports.AdminService = function($resource) {
    
    return $resource('/login/:id', {id : '@id'} );
    
};