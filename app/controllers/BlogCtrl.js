var BlogController = function ($scope, BlogService) {
    
    $scope.blogPosts = BlogService.query();

};

exports.BlogController = BlogController;