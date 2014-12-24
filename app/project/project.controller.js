'use strict';

/**
 * Project controller contains functions and data for Project page
 * @param ProjectService
 * @constructor
 */
var ProjectController = function (ProjectService) {

    var projectCtrl = this;
    projectCtrl.projectService_ = ProjectService;
    
    projectCtrl.projects = projectCtrl.projectService_.query();

};

// 
ProjectController.prototype = {
    
    
};

exports.ProjectController = ProjectController;