exports.ProjectController = function ($scope, $sce, ProjectService) {

    $scope.projects = ProjectService.query();

    $scope.platformImage = function (platform) {

        var pF = platform.toUpperCase();

        if (pF === 'ANDROID') {

            return 'android_icon.png';
        } else if (pF === 'WEB') {

            return 'web_icon.png';
        }


    };


};