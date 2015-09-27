// app.config(function($stateProvider) {
//     $stateProvider
//         .state('areas', {
//             url: '/areas',
//             templateUrl: 'js/areas/areas.html',
//             controller: 'AreaController',
//             resolve: {
//                 areas: function(AreaFactory) {
//                     return AreaFactory.find();
//                 },
//             }
//         });
// });

// app.controller('ProductController', function($scope, product, CartFactory, UserFactory, $state, AuthService, canEdit, recProds) {
//     $scope.canEdit = canEdit;
//     $scope.quantity = 1;
//     // console.log($scope.quantity);
//     $scope.product = product;
//     $scope.recProds = recProds;
//     $scope.isAdmin = AuthService.isAdmin;

//     $scope.addToCart = function() {
//         CartFactory.addToCart($scope.product,$scope.quantity)
//         .then(function() {
//                 $state.go('cart');
//             });
//     };

//     $scope.removeFromCart = function() {
//         CartFactory.removeFromCart($scope.product)
//         .then(function() {
//                 $state.go('home');
//             });
//     };

// 	UserFactory.find(product.user._id).then(function(user){
// 		return user.aggRating();
// 	}).then(function(aggRating){
// 		$scope.product.user.aggRating = aggRating;
// 	});
// });
