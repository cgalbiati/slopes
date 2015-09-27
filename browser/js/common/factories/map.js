app.factory('MapFactory', function ($http) {
    var map;
    var elevator;
    // var drawingManager;
    var poly; //in prog line
    var points = []; // in prog latLng Arr



    function initMap(opt) {

        map = new google.maps.Map(document.getElementById('map-canvas'), opt);
        elevator = new google.maps.ElevationService;
        var infowindow = new google.maps.InfoWindow({map: map});

    }

    function seePointElevation (){
        // Add a listener for the click event. Display the elevation for the LatLng of
        // the click inside the infowindow.
        map.addListener('click', function(event) {
            displayLocationElevation(event.latLng, elevator, infowindow);
        });
    }


    ///find out how to remove a certain click listener
    // google.maps.event.clearListeners(map, 'bounds_changed');


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
                Math.floor(Number(results[0].elevation)*3.28084) + ' feet.');
          } else {
            infowindow.setContent('No results found');
          }
        } else {
          infowindow.setContent('Elevation service failed due to: ' + status);
        }
      });
    }

    function makePolyline (opt) {
        //draws a polyline on the map given an options obj
        console.log('making poly', opt.path);
        var path =new google.maps.Polyline(opt);
        path.setMap(map);
    }

    function move (loc) {
        //centers map on a new location ({lat: , Lng: })
        var newLoc = new google.maps.LatLng(loc.lat, loc.lng);
        console.log(newLoc);
        map.panTo(newLoc);
    }

    function startDrawing(){

        //adds click listener to start constructing polyline and adding to points
        poly = new google.maps.Polyline({
            //red line
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 3
        });
        poly.setMap(map);

        // Add a listener for the click event to add to the line's path
        map.addListener('click', addLatLng);
        console.log('start drawing')
    }

    function addLatLng(event) {
        //adds a pt to the poly path and points array
      var path = poly.getPath();

      // Because path is an MVCArray, we can simply append a new coordinate
      // and it will automatically appear.
      path.push(event.latLng);
      points.push(event.latLng);
      console.log(' adding latlng', event.latLng)
      // console.log(poly)
    }

    // 

    function getElevPath(cb){
    console.log('getting elev path for ', points)
      elevator.getElevationAlongPath({
        'path': points,
        'samples': 256
      }, function(ele){
        return cb(ele);
      });
    }
    
      // var pathOpt = {
      //   path: points,
      //   geodesic: true,
      //   strokeColor: '#FF0000',
      //   strokeOpacity: 1.0,
      //   strokeWeight: 1.5,
      //   draggable: true,
      // }
      // makePolyline(pathOpt)


   
    return {
        initMap: initMap,
        makePolyline: makePolyline,
        move: move,
        startDrawing: startDrawing,
        addLatLng: addLatLng,
        // setUpDrawing: setUpDrawing,
        getElevPath: getElevPath,
        seePointElevation : seePointElevation,
    };

});

    // function setUpDrawing(){
    //     var drawingManager = new google.maps.drawing.DrawingManager({
    //         drawingMode: google.maps.drawing.OverlayType.MARKER,
    //         drawingControl: true,
    //         drawingControlOptions: {
    //           position: google.maps.ControlPosition.TOP_CENTER,
    //           drawingModes: [
    //             google.maps.drawing.OverlayType.MARKER,
    //             google.maps.drawing.OverlayType.POLYLINE,
    //           ]
    //         },
    //         markerOptions: {icon: 'images/beachflag.png'},
    //         circleOptions: {
    //           fillColor: '#ffff00',
    //           fillOpacity: 1,
    //           strokeWeight: 5,
    //           clickable: false,
    //           editable: true,
    //           zIndex: 1
    //         }
    //       });
    //     drawingManager.setMap(map);
    //     var line = []

    //     google.maps.event.addListener(drawingManager, "overlaycomplete", function(event) {
    //             var newLine = event.overlay;
    //             // console.log('latlng', event.overlay)
    //             // event.overlay.latLngs.j[0].j.forEach(function(latlng){
    //             //     // line.push(new google.maps)
    //             // })
    //             console.log('overlay', event.overlay)
    //             newLine.type = event.type;

    //             // getElevPath(event.overlay.getPath());
    //             // console.log('x' , x);
    //         });



    //         // google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
    //         //     console.log('vert')
    //         //     console.log(document.getElementById('vertices'))
    //         //     // document.getElementById('vertices').val(event.overlay.getPath().getArray());
    //         // });
    // }

     // function stopDrawing(){
    //     drawingManager.setOptions({
    //         drawingControl: false
    //     });
    // }

    // function startDrawing(){
    //     drawingManager.setOptions({
    //         drawingControl: true
    //     });
    // }
  //   var flightPath = new google.maps.Polyline({
  //   path: flightPlanCoordinates,
  //   geodesic: true,
  //   strokeColor: '#FF0000',
  //   strokeOpacity: 1.0,
  //   strokeWeight: 2
  // });

  // flightPath.setMap(map);

	