'use strict';

var ProjectController = function ($sce, ProjectService) {

    var projectCtrl = this;
    projectCtrl.sce_ = $sce;
    projectCtrl.projectService_ = ProjectService;
    
    projectCtrl.projects = projectCtrl.projectService_.query();

};

// 
ProjectController.prototype = {
    
    
};

exports.ProjectController = ProjectController;