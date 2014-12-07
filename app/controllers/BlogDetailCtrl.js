var BlogDetailController = function ($routeParams, $sce, BlogService) {

    var blogDetCtrl = this;
    blogDetCtrl.routeParams_ = $routeParams;
    blogDetCtrl.sce_ = $sce;
    blogDetCtrl.blogService_ = BlogService;

    blogDetCtrl.blogPost = blogDetCtrl.blogService_.get({
        id: blogDetCtrl.routeParams_.id
    });

};

BlogDetailController.prototype = {

    renderHtml: function (htmlString) {
        return this.sce_.trustAsHtml(htmlString);
    }

};

exports.BlogDetailController = BlogDetailController;