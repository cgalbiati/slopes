app.factory('MapFactory', function () {
    var map;
    var drawingManager;
    function initMap(opt) {
        // var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      map = new google.maps.Map(document.getElementById('map-canvas'), opt);
    // var newLoc = new google.maps.LatLng(25, 70);
      // map.panTo(newLoc)

       var elevator = new google.maps.ElevationService;
      var infowindow = new google.maps.InfoWindow({map: map});

      // Add a listener for the click event. Display the elevation for the LatLng of
      // the click inside the infowindow.
      map.addListener('click', function(event) {
        displayLocationElevation(event.latLng, elevator, infowindow);
      });

    }


function displayLocationElevation(location, elevator, infowindow) {
  // Initiate the location request
  elevator.getElevationForLocations({
    'locations': [location]
  }, function(results, status) {
    infowindow.setPosition(location);
    if (status === google.maps.ElevationStatus.OK) {
      // Retrieve the first result
      if (results[0]) {
        // Open the infowindow indicating the elevation at the clicked position.
        infowindow.setContent('The elevation at this point <br>is ' +
            results[0].elevation + ' meters.');
      } else {
        infowindow.setContent('No results found');
      }
    } else {
      infowindow.setContent('Elevation service failed due to: ' + status);
    }
  });
}
    
    function makePolyline (opt) {
        var path =new google.maps.Polyline(opt);
        path.setMap(map)
    }

    function move (loc) {
        var newLoc = new google.maps.LatLng(loc.lat, loc.lng);
        console.log(newLoc)
        map.panTo(newLoc);
    }

    function setUpDrawing(){
        var drawingManager = new google.maps.drawing.DrawingManager({
            drawingMode: google.maps.drawing.OverlayType.MARKER,
            drawingControl: true,
            drawingControlOptions: {
              position: google.maps.ControlPosition.TOP_CENTER,
              drawingModes: [
                google.maps.drawing.OverlayType.MARKER,
                google.maps.drawing.OverlayType.CIRCLE,
                google.maps.drawing.OverlayType.POLYGON,
                google.maps.drawing.OverlayType.POLYLINE,
                google.maps.drawing.OverlayType.RECTANGLE
              ]
            },
            markerOptions: {icon: 'images/beachflag.png'},
            circleOptions: {
              fillColor: '#ffff00',
              fillOpacity: 1,
              strokeWeight: 5,
              clickable: false,
              editable: true,
              zIndex: 1
            }
          });
        drawingManager.setMap(map);
    }

    function stopDrawing(){
        drawingManager.setOptions({
            drawingControl: false
        });
    }

    function startDrawing(){
        drawingManager.setOptions({
            drawingControl: true
        });
    }
  //   var flightPath = new google.maps.Polyline({
  //   path: flightPlanCoordinates,
  //   geodesic: true,
  //   strokeColor: '#FF0000',
  //   strokeOpacity: 1.0,
  //   strokeWeight: 2
  // });

  // flightPath.setMap(map);
    return {
        initMap: initMap,
        makePolyline: makePolyline,
        move: move,
        setUpDrawing: setUpDrawing,
    };
});
	