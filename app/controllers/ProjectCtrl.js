var ProjectController = function ($scope, $sce, ProjectService) {

    $scope.projects = ProjectService.query();

    
    //Todo, move these into directives ** Needs refactor 
    $scope.platformImage = function (platform) {

        var pF = platform.toUpperCase();

        if (pF === 'ANDROID') {

            return 'android_icon.png';
        } else if (pF === 'WEB') {

            return 'web_icon.png';
        }

    };
    
    $scope.platformType = function (platform) {

        var pF = platform.toUpperCase();

        if (pF === 'ANDROID') {

            return 'tile-android';
            
        } else if (pF === 'WEB') {

            return 'tile-web';
        }

    };
    

};

exports.ProjectController = ProjectController;