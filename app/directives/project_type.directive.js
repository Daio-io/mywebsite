var ProjectType = function () {

    return {
        restrict: 'E',
        templateUrl: 'views/partial/project_tile',
        replace: false,
        scope: {
            project: '=projectObject',
        },
        link: function (scope, elems, attrs) {

            scope.proj = scope.$eval(attrs.projectObject);

            var pF = scope.proj.platform.toUpperCase();

            if (pF === 'ANDROID') {

                scope.icon = 'android_icon.png';
                scope.css = 'tile-android';

            } else if (pF === 'WEB') {

                scope.icon = 'web_icon.png';
                scope.css = 'tile-web';
            }

        }

    };
};

exports.ProjectType = ProjectType;