exports.BlogService = function($resource) {
    
    return $resource('/api/blogs/:id', {id : '@id'} );
    
};