'use strict';

/**
 *
 * @param $routeParams injected to get parameters from page URL
 * @param $sce injected to allow strings to be passed as trusted HTML
 * @param BlogService injected to query the Blog API for blogposts
 * @constructor
 */
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

    /**
     *
     * @param htmlString to convert to a safe HTML for page display
     * @returns {The trusted HTML}
     */
    renderHtml: function (htmlString) {
        return this.sce_.trustAsHtml(htmlString);
    }

};

exports.BlogDetailController = BlogDetailController;