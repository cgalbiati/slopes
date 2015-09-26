app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: "MainCtrl",
        resolve: {
        	skiAreas: function (AreaFactory){
        		return AreaFactory.findAll();
        	}
        }
    });
});