'use strict';

/**
 * ProjectTile directive is used to create a specific tyled project tile based on the project platform
 * @returns {A directive based on the platform of the project, e.g. web or Android}
 * @constructor
 */
var ProjectType = function () {

    return {
        restrict: 'E',
        templateUrl: 'views/partial/project_tile',
        replace: false,
        scope: {
            project: '=projectObject'
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