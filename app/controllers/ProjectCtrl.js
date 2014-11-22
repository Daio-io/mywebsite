exports.ProjectController = function ($scope, ProjectService) {

    $scope.projects = ProjectService.query();

    
};