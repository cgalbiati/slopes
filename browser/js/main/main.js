app.controller('MainCtrl', function ($scope, $state, MapFactory, AreaFactory, skiAreas){
	$scope.skiAreas = skiAreas;
	
	function setCenter(newLoc){
		return MapFactory.setCenter(newLoc);
	}

	$scope.move=MapFactory.move;
	var gpsStart = new google.maps.LatLng(39.88,-105.78);

	// var gpsStart = {latitude: 39.88, longitude: -105.78};
	// $scope.map = { center: { latitude: 25, longitude: -77 }, zoom: 8 };
	var myOptions = {
	  zoom : 13,
	  center : gpsStart,
	  panControl: true,
	  mapTypeId: google.maps.MapTypeId.HYBRID
	};

	MapFactory.initMap(myOptions);

	$scope.map = myOptions;

	var pathcoords = [
    {lat: 39.88, lng: -105.78},
    {lat: 39.78, lng: -105.88},
    {lat: 39.68, lng: -105.98},
  ];

	var pathOpt = {
    path: pathcoords,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  }
  MapFactory.makePolyline(pathOpt);

  MapFactory.setUpDrawing();

// 	uiGmapGoogleMapApi.then(function(maps) {
// 		// var userLatLng = new maps.LatLng(position.coords.latitude, position.coords.longitude);
// 		// var userLatLngCenterObj = {latitude: userLatLng.A, longitude: userLatLng.F};
// 		console.log('mapsObj', maps)
// 		// console.log(maps.Map.prototype.setMapTypeId.toString())
// 		// $scope.map.zoom = 7;
// 		// $scope.map = {
// 	 //  zoom : 10,
// 	 //  center : gpsStart,
// 	 //  panControl: true,
// 	  mapTypeId : maps.MapTypeId.SATELLITE,
// 	  // styles: styleArr
// 	// };
// 	var map_canvas_obj = document.getElementById("map");
// 	var userLatLng = new maps.LatLng(25,75);
// 	console.log('user', userLatLng.lat())
// 	var userLatLngCenterObj = {latitude: userLatLng.A, longitude: userLatLng.F};

// 	// $scope.marker = {
// 	// 	id: 1,
// 	// 	coords: gpsStart
// 	// }

// 	// var elevator = new maps.ElevationService;

// 	// console.log(maps.Map.prototype.setCenter)
// 	// var mapOpt = {
// 	//   zoom : 10,
// 	//   center : userLatLngCenterObj,
// 	//   panControl: true,
// 	//   options: {mapTypeId: google.maps.MapTypeId.SATELLITE },
// 	//   // styles: styleArr
// 	// };

// 	$scope.map = new maps.Map(map_canvas_obj, {center: userLatLng, zoom: 8 });
// 	// console.log('$scope.map', $scope.map)
// 	// var marker = new maps.Marker({
//  //          map : $scope.map,
//  //          position : userLatLng,
//  //    });

// 		// $scope.map.setMapTypeId(maps.MapTypeId.SATELLITE);
// 		// console.log($scope.map.getCenter())

// 	     $scope.markers = [];

// 	     // $scope.map.setMapTypeId(maps.MapTypeId.TERRAIN)

// 	     console.log($scope.map)

//       // var infoWindow = new maps.InfoWindow();

//       // $scope.addMarker = function(lat, lng, title) {

//       //   var latLang = new maps.LatLng(lat, lng);

//       //   var marker = new maps.Marker({
//       //     map : $scope.map,
//       //     position : latLang,
//       //     title : title
//       //   });
//       //   marker.content = '<div class="infoWindowContent">'
//       //       + marker.title + '</div>';

//       //   google.maps.event.addListener(marker, 'click', function() {
//       //     infoWindow.setContent('<h2>' + marker.title + '</h2>'
//       //         + marker.content);
//       //     infoWindow.open($scope.map, marker);
//       //   });

//       //   $scope.markers.push(marker);

//       //   $scope.map.setCenter(latLang);
//       // };

// // $scope.map = {
// // 	  zoom : 7,
// // 	  center : {latitude: 29.88, longitude: -105.78},
// // 	  panControl: true,
// // 	  mapTypeId : maps.MapTypeId.SATELLITE,
// // 	  styles: styleArr
// // 	};
// 	});





	// $scope.$on('mapInitialized', function(event, map) {
	// 	var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	// 	console.log('after', userLatLng)
	// 	map.center = userLatLng;
 //      	// var myLatlng = new google.maps.LatLng(40.705189,-74.009209)

 //      	// map.setCenter(myLatlng)
      
 //    });

	var styleArr = [{
	  featureType: "landscape",
	  stylers: [{
	    saturation: -100
	  }, {
	    lightness: 60
	  }]
	}, {
	  featureType: "road.local",
	  stylers: [{
	    saturation: -100
	  }, {
	    lightness: 40
	  }, {
	    visibility: "on"
	  }]
	}, {
	  featureType: "transit",
	  stylers: [{
	    saturation: -100
	  }, {
	    visibility: "simplified"
	  }]
	}, {
	  featureType: "administrative.province",
	  stylers: [{
	    visibility: "off"
	  }]
	}, {
	  featureType: "water",
	  stylers: [{
	    visibility: "on"
	  }, {
	    lightness: 30
	  }]
	}, {
	  featureType: "road.highway",
	  elementType: "geometry.fill",
	  stylers: [{
	    color: "#ef8c25"
	  }, {
	    lightness: 40
	  }]
	}, {
	  featureType: "road.highway",
	  elementType: "geometry.stroke",
	  stylers: [{
	    visibility: "off"
	  }]
	}, {
	  featureType: "poi.park",
	  elementType: "geometry.fill",
	  stylers: [{
	    color: "#b6c54c"
	  }, {
	    lightness: 40
	  }, {
	    saturation: -40
	  }]
	}];
})