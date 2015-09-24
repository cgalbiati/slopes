app.controller('MainCtrl', function ($scope){
	console.log('hi')
	$scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
	$scope.$on('mapInitialized', function(event, map) {
      	// var myLatlng = new google.maps.LatLng(40.705189,-74.009209)

      	// map.setCenter(myLatlng)
      
    });
})