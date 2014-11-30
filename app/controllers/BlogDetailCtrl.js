var BlogDetailController = function ($scope, $routeParams, $sce, BlogService) {
    
    $scope.blogPost = BlogService.get({id: $routeParams.id});

    $scope.renderHtml = function (html_code) {
        return $sce.trustAsHtml(html_code);
    };
};

exports.BlogDetailController = BlogDetailController;