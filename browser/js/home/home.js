app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: "HomeCtrl",
        resolve: {
        	skiAreas: function (AreaFactory){
        		return AreaFactory.findAll();
        	},
            trails: function (TrailFactory){
                return TrailFactory.findAll();
            },
            // activities: function (ActivityFactory){
            //     console.log('looking for activities');
            //     return ActivityFactory.findAll();
            // }

        }
    });
});

app.controller('HomeCtrl', function ($scope, $state, $rootScope, MapFactory, AreaFactory, TrailFactory, skiAreas, trails){
    $scope.skiAreas = skiAreas;
    $scope.trails = trails;



    // $scope.selectedTrails = [];

    $scope.addToCompare = function(trail){
        var newPath = [];
        trail.path.forEach(function(pathObj){
            newPath.push({lat: pathObj.H, lng:pathObj.L});
        })
        $rootScope.currentVars.selectedTrails.push(trail);
        var pathOpt = {
            path: newPath,
            geodesic: true,
            strokeColor: '#66FFFF',
            strokeOpacity: 1.0,
            strokeWeight: 1,
        }   
        MapFactory.makePolyline(pathOpt);
        MapFactory.drawChart(trail.elevObj, trail.name)
    }
    
    var gpsStart = new google.maps.LatLng(39.88,-105.78);

    var myOptions = {
      zoom : 13,
      center : gpsStart,
      panControl: true,
      mapTypeId: google.maps.MapTypeId.HYBRID,
      rotateControl: true,
      tiltControl: true,
    };

    MapFactory.initMap(myOptions);

    $scope.map = myOptions;

    

   
});