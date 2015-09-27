// app.controller('MainCtrl', function ($scope){
// 	console.log('hi')
	
//       $scope.mapData = {
// 		points: [],
// 		elevObj: {},
// 		currentArea: null
// 	}
      
// }) 


// app.controller('MainCtrl', function ($scope){
// 	// $scope.showVars = {
// 	// 	trailForm: false
// 	// };
// 	$scope.mapData = {
// 		points: [],
// 		elevObj: {},
// 		currentArea: null
// 	}

// 	console.log('mapdata', $scope.mapData)
	
// 	// $scope.move = function(area){
// 	// 	$scope.mapData.currentArea = area;
// 	// 	MapFactory.move(area);
// 	// }
	
// 	// var gpsStart = new google.maps.LatLng(39.88,-105.78);

// 	// var myOptions = {
// 	//   zoom : 13,
// 	//   center : gpsStart,
// 	//   panControl: true,
// 	//   mapTypeId: google.maps.MapTypeId.HYBRID,
// 	//   rotateControl: true,
// 	//   tiltControl: true,
// 	// };

// 	// MapFactory.initMap(myOptions);

// 	// $scope.map = myOptions;

// 	// var pathcoords = [
//  //    {lat: 39.88, lng: -105.78},
//  //    {lat: 39.78, lng: -105.88},
//  //    {lat: 39.68, lng: -105.98},
//  //  ];

// 	// var pathOpt = {
//  //    path: pathcoords,
//  //    geodesic: true,
//  //    strokeColor: '#FF0000',
//  //    strokeOpacity: 1.0,
//  //    strokeWeight: 1.5,
//  //    draggable: true,
//  //  }
//  //  MapFactory.makePolyline(pathOpt);

// 	// $scope.startDrawing = MapFactory.startDrawing;


//   // MapFactory.setUpDrawing();

//   // $scope.polyE = function(){
//   // 	MapFactory.getElevPath(function(ele){
//   // 		$scope.mapData.elevObj = ele;
//   // 	});
//   // };
  	

// 	// $scope.newTrail = {
//  //        name: null,
//  //        path: null,
//  //        elevObj: null,
//  //    };

            
//     // $scope.createTrail = function(){
//     //     $scope.trail.elevObj = scope.elevObj;
//     //     $scope.trail.path = scope.points;
//     //     return TrailFactory.create($scope.newTrail)
// 	   //      .then(function(){
// 	   //          $scope.newTrail = {
// 	   //              name: null,
// 	   //              path: null,
// 	   //              elevObj: null
// 	   //          };
// 	   //          $scope.showForm = false;
// 	   //      });
//     // };

// 	// var styleArr = [{
// 	//   featureType: "landscape",
// 	//   stylers: [{
// 	//     saturation: -100
// 	//   }, {
// 	//     lightness: 60
// 	//   }]
// 	// }, {
// 	//   featureType: "road.local",
// 	//   stylers: [{
// 	//     saturation: -100
// 	//   }, {
// 	//     lightness: 40
// 	//   }, {
// 	//     visibility: "on"
// 	//   }]
// 	// }, {
// 	//   featureType: "transit",
// 	//   stylers: [{
// 	//     saturation: -100
// 	//   }, {
// 	//     visibility: "simplified"
// 	//   }]
// 	// }, {
// 	//   featureType: "administrative.province",
// 	//   stylers: [{
// 	//     visibility: "off"
// 	//   }]
// 	// }, {
// 	//   featureType: "water",
// 	//   stylers: [{
// 	//     visibility: "on"
// 	//   }, {
// 	//     lightness: 30
// 	//   }]
// 	// }, {
// 	//   featureType: "road.highway",
// 	//   elementType: "geometry.fill",
// 	//   stylers: [{
// 	//     color: "#ef8c25"
// 	//   }, {
// 	//     lightness: 40
// 	//   }]
// 	// }, {
// 	//   featureType: "road.highway",
// 	//   elementType: "geometry.stroke",
// 	//   stylers: [{
// 	//     visibility: "off"
// 	//   }]
// 	// }, {
// 	//   featureType: "poi.park",
// 	//   elementType: "geometry.fill",
// 	//   stylers: [{
// 	//     color: "#b6c54c"
// 	//   }, {
// 	//     lightness: 40
// 	//   }, {
// 	//     saturation: -40
// 	//   }]
// 	// }];
// });