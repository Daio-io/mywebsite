var ProjectType = function () {

    return {
        restrict: 'E',
        template: '<div class="project-tile col-xs-6 col-sm-3"><div class="tile" ng-class="css"><h6><img src="/img{{proj.imageURL}}"><img src="/img/{{icon}}">{{proj.name}}</h6><div class="project-desc">{{proj.description}}</div><p></p><a class="btn btn-success" ng-href="{{proj.projectURL}}">Here it is</a></div></div>',
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