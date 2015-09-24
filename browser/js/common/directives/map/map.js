'use strict';

app.directive('mapType', function () {
	return {
		restrict: 'A',
		// templateUrl: 'js/common/directives/map/map.html',
		link: function (scope, element, attribute) {

		}

      
// var map;

// function initialize_gmaps() {
//   // initialize new google maps LatLng object
//   var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
//   // set the map options hash
//   var mapOptions = {
//     center: myLatlng,
//     zoom: 13,
//     mapTypeId: google.maps.MapTypeId.ROADMAP,
//     styles: styleArr
//   };
//   // get the maps div's HTML obj
//   var map_canvas_obj = document.getElementById("map-canvas");
//   // initialize a new Google Map with the options
//   map = new google.maps.Map(map_canvas_obj, mapOptions);
//   // Add the marker to the map
//   var marker = new google.maps.Marker({
//     position: myLatlng,
//     title:"Hello World!",
//   });
// }

// $(document).ready(function() {
//   initialize_gmaps();
// });

// var styleArr = [{
//   featureType: "landscape",
//   stylers: [{
//     saturation: -100
//   }, {
//     lightness: 60
//   }]
// }, {
//   featureType: "road.local",
//   stylers: [{
//     saturation: -100
//   }, {
//     lightness: 40
//   }, {
//     visibility: "on"
//   }]
// }, {
//   featureType: "transit",
//   stylers: [{
//     saturation: -100
//   }, {
//     visibility: "simplified"
//   }]
// }, {
//   featureType: "administrative.province",
//   stylers: [{
//     visibility: "off"
//   }]
// }, {
//   featureType: "water",
//   stylers: [{
//     visibility: "on"
//   }, {
//     lightness: 30
//   }]
// }, {
//   featureType: "road.highway",
//   elementType: "geometry.fill",
//   stylers: [{
//     color: "#ef8c25"
//   }, {
//     lightness: 40
//   }]
// }, {
//   featureType: "road.highway",
//   elementType: "geometry.stroke",
//   stylers: [{
//     visibility: "off"
//   }]
// }, {
//   featureType: "poi.park",
//   elementType: "geometry.fill",
//   stylers: [{
//     color: "#b6c54c"
//   }, {
//     lightness: 40
//   }, {
//     saturation: -40
//   }]
// }];




// 		// link: function (scope) {
// 		// 	// var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
// 		// 	scope.map;
// 		// 	initialize_gmaps = function() {
// 		// 		var myLatlng = new google.maps.LatLng(40.705189,-74.009209);

// 		// 		var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

// 		// 		var myOptions = {
// 		// 		  zoom : 16,
// 		// 		  center : userLatLng,
// 		// 		  mapTypeId : google.maps.MapTypeId.ROADMAP,
// 		// 		  // styles: styleArr
// 		// 		};
// 		// 		var mapObject = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

// 		// 		scope.map = new google.maps.Marker({map: mapObject, position: userLatLng });
// 		// 		var marker = new google.maps.Marker({
// 		// 		    position: myLatlng,
// 		// 		    title:"Hello World!",
// 		// 		});
// 		// 	};

// 			// var circle = new google.maps.Circle({
// 			//   center: userLatLng,
// 			//   radius: position.coords.accuracy,
// 			//   map: mapObject,
// 			//   fillColor: '#0000FF',
// 			//   fillOpacity: 0.5,
// 			//   strokeColor: '#0000FF',
// 			//   strokeOpacity: 1.0
// 			// });
// 			// mapObject.fitBounds(circle.getBounds());

// 			// function writeAddressName(latLng) {
// 			//   var geocoder = new google.maps.Geocoder();
// 			//   geocoder.geocode({
// 			//     "location": latLng
// 			//   },
// 			//   function(results, status) {
// 			//     if (status == google.maps.GeocoderStatus.OK)
// 			//       document.getElementById("address").innerHTML = results[0].formatted_address;
// 			//     else
// 			//       document.getElementById("error").innerHTML += "Unable to retrieve your address"  + "<br />";
// 			//   });
// 			// }

// 			// function geolocationError(positionError) {
// 			// 	document.getElementById("error").innerHTML += "Error: " + positionError.message + "<br />";
// 			// }

// 			// function geolocateUser() {
// 			// 	// If the browser supports the Geolocation API
// 			// 	if (navigator.geolocation){
// 			// 	  var positionOptions = {
// 			// 	    enableHighAccuracy: true,
// 			// 	    timeout: 10 * 1000 // 10 seconds
// 			// 	  };
// 			// 	  navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, positionOptions);
// 			// 	}
// 			// 	else
// 			// 	  document.getElementById("error").innerHTML += "Your browser doesn't support the Geolocation API";
// 			// }


// 		// 	var styleArr = [{
// 		// 	  featureType: "landscape",
// 		// 	  stylers: [{
// 		// 	    saturation: -100
// 		// 	  }, {
// 		// 	    lightness: 60
// 		// 	  }]
// 		// 	}, {
// 		// 	  featureType: "road.local",
// 		// 	  stylers: [{
// 		// 	    saturation: -100
// 		// 	  }, {
// 		// 	    lightness: 40
// 		// 	  }, {
// 		// 	    visibility: "on"
// 		// 	  }]
// 		// 	}, {
// 		// 	  featureType: "transit",
// 		// 	  stylers: [{
// 		// 	    saturation: -100
// 		// 	  }, {
// 		// 	    visibility: "simplified"
// 		// 	  }]
// 		// 	}, {
// 		// 	  featureType: "administrative.province",
// 		// 	  stylers: [{
// 		// 	    visibility: "off"
// 		// 	  }]
// 		// 	}, {
// 		// 	  featureType: "water",
// 		// 	  stylers: [{
// 		// 	    visibility: "on"
// 		// 	  }, {
// 		// 	    lightness: 30
// 		// 	  }]
// 		// 	}, {
// 		// 	  featureType: "road.highway",
// 		// 	  elementType: "geometry.fill",
// 		// 	  stylers: [{
// 		// 	    color: "#ef8c25"
// 		// 	  }, {
// 		// 	    lightness: 40
// 		// 	  }]
// 		// 	}, {
// 		// 	  featureType: "road.highway",
// 		// 	  elementType: "geometry.stroke",
// 		// 	  stylers: [{
// 		// 	    visibility: "off"
// 		// 	  }]
// 		// 	}, {
// 		// 	  featureType: "poi.park",
// 		// 	  elementType: "geometry.fill",
// 		// 	  stylers: [{
// 		// 	    color: "#b6c54c"
// 		// 	  }, {
// 		// 	    lightness: 40
// 		// 	  }, {
// 		// 	    saturation: -40
// 		// 	  }]
// 		// 	}];
// 		}
		
	};
});


