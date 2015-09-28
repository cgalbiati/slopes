app.directive('trailForm', function (TrailFactory, MapFactory, $rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/trail-form/trail-form.html',
        link: function(scope) {
            scope.trail = {
                name: null,
                path: null,
                elevObj: null,
            };

        var getElevObj = function(cb){
            MapFactory.getElevPath(function(ele){
                scope.trail.elevObj = ele;
                cb(ele)
            });
        };

        var clearVars = function(cb){
            scope.trail = {
                name: null,
                path: null,
                elevObj: null
            };
            MapFactory.points = [];
            MapFactory.clearClickListeners();
            $rootScope.showVars.trailForm = false;
        };

            scope.createTrail = function(){
                scope.trail.path = MapFactory.points;
                return getElevObj(function(elevObj){
                    scope.trail.elevObj = elevObj;
                    return TrailFactory.create(scope.trail)
                    .then(function(trail){
                        clearVars();
                        $rootScope.showVars.graph = true;
                        $rootScope.currentVars.selectedTrails.push(trail);
                        return MapFactory.drawChart(trail.elevObj, trail.name);
                    });
                });
                
            };
            
        }
    };
});


