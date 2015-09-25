app.controller('MainCtrl', function ($scope, uiGmapGoogleMapApi){
	console.log('hi')
	var gpsStart = {latitude: 39.88, longitude: -105.78}
	// $scope.map = { center: { latitude: 25, longitude: -77 }, zoom: 8 };
	var myOptions = {
	  zoom : 11,
	  center : gpsStart,
	  panControl: true,
	  // mapTypeId : google.maps.MapTypeId.HYBRID,
	  // options: {
   //          mapTypeId: maps.MapTypeId.TERRAIN
   //      },
	  styles: styleArr
	};
	// $scope.map = myOptions;
		// scope.map.center = userLatLng;
	// var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	console.log('before')

	uiGmapGoogleMapApi.then(function(maps) {
		// var userLatLng = new maps.LatLng(position.coords.latitude, position.coords.longitude);
		// var userLatLngCenterObj = {latitude: userLatLng.A, longitude: userLatLng.F};
		console.log('mapsObj', maps)
		// console.log(maps.Map.prototype.setMapTypeId.toString())
		// $scope.map.zoom = 7;
		$scope.map = {
	  zoom : 10,
	  center : gpsStart,
	  panControl: true,
	  mapTypeId : maps.MapTypeId.SATELLITE,
	  // styles: styleArr
	};
		console.log($scope.map)
		// $scope.map.setMapTypeId(maps.MapTypeId.HYBRID);

// $scope.map = {
// 	  zoom : 7,
// 	  center : {latitude: 29.88, longitude: -105.78},
// 	  panControl: true,
// 	  mapTypeId : maps.MapTypeId.SATELLITE,
// 	  styles: styleArr
// 	};
    });





	$scope.$on('mapInitialized', function(event, map) {
		var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		console.log('after', userLatLng)
		map.center = userLatLng;
      	// var myLatlng = new google.maps.LatLng(40.705189,-74.009209)

      	// map.setCenter(myLatlng)
      
    });

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