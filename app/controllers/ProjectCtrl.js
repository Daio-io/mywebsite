var ProjectController = function ($scope, $sce, ProjectService) {

    $scope.projects = ProjectService.query();

};

exports.ProjectController = ProjectController;