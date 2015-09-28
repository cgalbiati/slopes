app.directive('navbar', function ($rootScope, AuthService, AUTH_EVENTS, $state, MapFactory, AreaFactory) {

    return {
        restrict: 'E',
        scope: {},
        // controller: "HomeCtrl",
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function (scope) {

            // AreaFactory.find().then(function(areas){
            //     scope.areas = areas;
            // });

            scope.compareTrails = function(){
                console.log($rootScope.trailList);
                $rootScope.showVars.trailList = !$rootScope.showVars.trailList;
            }
            scope.selectedArea;

            scope.move = function(area){
                console.log('going to', area.name)
                // $rootScope.currentVars.area = area;
                MapFactory.move(area);
            }
            
            scope.setSelected = function(area){
                scope.selectedArea = area;
            }

            scope.areas = [{    
                    name: 'Winter Park',
                    activity: 'Ski',
                    lat: '39.88', 
                    lng: '-105.78' 
                },{    
                    name: 'Eldora',
                    activity: 'Ski',
                    lat: '39.94', 
                    lng: '-105.59' 
                },{    
                    name: 'Aspen Mountain',
                    activity: 'Ski',
                    lat: '39.17', 
                    lng: '-106.82' 
                },{    
                    name: 'Crested Butte',
                    activity: 'Ski',
                    lat: '38.89', 
                    lng: '-106.97' 
                },{    
                    name: 'Silverton',
                    activity: 'Ski',
                    lat: ' 37.89', 
                    lng: '-107.67' 
                },{    
                    name: 'Killington',
                    activity: 'Ski',
                    lat: '43.63', 
                    lng: '-72.82' 
                },
                
            ];

            scope.addTrail = function(){
                $rootScope.showVars.trailForm = !$rootScope.showVars.trailForm;
                MapFactory.startDrawing();
            }

            scope.user = null;

            scope.isLoggedIn = function () {
                return AuthService.isAuthenticated();
            };

            scope.logout = function () {
                AuthService.logout().then(function () {
                   $state.go('home');
                });
            };

            var setUser = function () {
                AuthService.getLoggedInUser().then(function (user) {
                    scope.user = user;
                });
            };

            var removeUser = function () {
                scope.user = null;
            };

            setUser();

            $rootScope.$on(AUTH_EVENTS.loginSuccess, setUser);
            $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
            $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);

        }

    };

});
