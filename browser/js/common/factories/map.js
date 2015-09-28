app.factory('MapFactory', function () {
    var map;
    var elevator;
    // var drawingManager;
    var poly; //in prog line
    var points = []; // in prog latLng Arr
    var areas = [];
    var trails = [];
    var chartData = [['Distance']];

    function drawChart(elev, name) {

    makeDataArray(elev, name);
    console.log('data', chartData)  

  //   var data = new google.visualization.DataTable();
  // data.addColumn('string', 'Sample');
  // data.addColumn('number', 'Elevation');
  // for (var i = 0; i < elev.length; i++) {
  //   data.addRow(['', Math.floor(Number(elev[i].elevation)*3.281)]);
  // }  
    var data = google.visualization.arrayToDataTable(chartData);

    var options = {
      title: '',
      backgroundColor: 'none',
      width:'100%',
      legend: {position: 'none'},
      vAxis: {title: 'Elevation (ft)',  titleTextStyle: {color: 'grey'}},
      hAxis: {title: '',  titleTextStyle: {color: 'grey'}}
    };

    var chart = new google.visualization.AreaChart(document.getElementById('elevation_chart'));
    chart.draw(data, options);
  }


    function initMap(opt) {

        map = new google.maps.Map(document.getElementById('map-canvas'), opt);
        elevator = new google.maps.ElevationService;
        var infowindow = new google.maps.InfoWindow({map: map});
        // google.load("visualization", "1", {packages:['columnchart']});


    }

    function seePointElevation (){
        // Add a listener for the click event. Display the elevation for the LatLng of
        // the click inside the infowindow.
        map.addListener('click', function(event) {
            displayLocationElevation(event.latLng, elevator, infowindow);
        });
    }

    function clearClickListeners () {
        google.maps.event.clearListeners(map, 'click');
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
        map.panTo(newLoc);
    }

    function startDrawing(){

        //adds click listener to start constructing polyline and adding to points
        poly = new google.maps.Polyline({
            //red line
            strokeColor: '#469FD3',
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

    function clearMap(){
        // clear all lines from map
    }

    // 

    function getElevPath(cb){
    console.log('getting elev path for ', points)
      elevator.getElevationAlongPath({
        'path': points,
        'samples': 256
      }, function(ele){
        return cb(ele)
      });
    }

    // Takes an array of ElevationResult objects, draws the path on the map
// and plots the elevation profile on a Visualization API ColumnChart.
function plotElevation(elevations, status) {
    console.log('getting graph for ', elevations)
    console.log('status', status)
  var chartDiv = document.getElementById('elevation_chart');
  if (status !== google.maps.ElevationStatus.OK) {
    // Show the error code inside the chartDiv.
    chartDiv.innerHTML = 'Cannot show elevation: request failed because ' +
        status;
    return;
  }
  // Create a new chart in the elevation_chart DIV.
  var chart = new google.visualization.ColumnChart(chartDiv);

  // Extract the data from which to populate the chart.
  // Because the samples are equidistant, the 'Sample'
  // column here does double duty as distance along the
  // X axis.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Sample');
  data.addColumn('number', 'Elevation');
  for (var i = 0; i < elevations.length; i++) {
    data.addRow(['', Math.floor(Number(elevations[i].elevation)*3.281)]);
  }

  // Draw the chart using the data within its DIV.
  chart.draw(data, {
    height: 150,
    legend: 'none',
    titleY: 'Elevation (ft)'
  });
}

function makeDataArray(elevations, name){
    chartData[0].push(name);
    for(var i=0; i<elevations.length; i++){
        if(!chartData[i+1]){
            chartData.push(['', Math.floor(Number(elevations[i].elevation)*3.281)]);
        } else {
            chartData[i+1].push(Math.floor(Number(elevations[i].elevation)*3.281));
        }
    }
}

// Takes an array of ElevationResult objects, draws the path on the map
// and plots the elevation profile on a Visualization API ColumnChart.
function makeAreaGraph(elevations) {
    console.log('getting graph for ', elevations)
    makeDataArray(elevations);

    var data = google.visualization.arrayToDataTable(chartData);

    var options = {
      title: 'Elevation Profile',
      hAxis: {title: ''},
      vAxis: {title: 'Year', minValue: 0}
    };
    var chart = new google.visualization.AreaChart(document.getElementById('elevation_chart'));
        chart.draw(data, options);
};

  // var chartDiv = document.getElementById('elevation_chart');
  // if (status !== google.maps.ElevationStatus.OK) {
  //   // Show the error code inside the chartDiv.
  //   chartDiv.innerHTML = 'Cannot show elevation: request failed because ' +
  //       status;
  //   return;
  // }
  // // Create a new chart in the elevation_chart DIV.
  // var chart = new google.visualization.ColumnChart(chartDiv);

  // // Extract the data from which to populate the chart.
  // // Because the samples are equidistant, the 'Sample'
  // // column here does double duty as distance along the
  // // X axis.
  // var data = new google.visualization.DataTable();
  // data.addColumn('string', 'Sample');
  // data.addColumn('number', 'Elevation');
  // for (var i = 0; i < elevations.length; i++) {
  //   data.addRow(['', Math.floor(Number(elevations[i].elevation)*3.281)]);
  // }

  // // Draw the chart using the data within its DIV.
  // chart.draw(data, {
  //   height: 150,
  //   legend: 'none',
  //   titleY: 'Elevation (ft)'
  // });
    
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
        plotElevation: plotElevation,
        clearClickListeners: clearClickListeners,
        points: points,
        areas: areas,
        trails: trails,
        makeAreaGraph: makeAreaGraph,
        drawChart: drawChart
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

	