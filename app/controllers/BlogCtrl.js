var BlogController = function ($scope, BlogService) {

    $scope.word = 'Blog';

    $scope.renderHtml = function (html_code) {
        return $sce.trustAsHtml(html_code);
    };
};

exports.BlogController = BlogController;