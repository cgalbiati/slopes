app.directive('navbar', function ($rootScope, AuthService, AUTH_EVENTS, $state, MapFactory, AreaFactory) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function (scope) {
            console.log($rootScope.showVars)
            AreaFactory.find().then(function(areas){
                scope.areas = areas;
                console.log('areas', scope.areas)
            });

            // scope.items = [
            //     { label: 'Home', state: 'home' },
            //     { label: 'About', state: 'about' },
            //     { label: 'Documentation', state: 'docs' },
            //     { label: 'Members Only', state: 'membersOnly', auth: true }
            // ];

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
