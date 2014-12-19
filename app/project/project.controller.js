'use strict';

var ProjectController = function (ProjectService) {

    var projectCtrl = this;
    projectCtrl.projectService_ = ProjectService;
    
    projectCtrl.projects = projectCtrl.projectService_.query();

};

// 
ProjectController.prototype = {
    
    
};

exports.ProjectController = ProjectController;