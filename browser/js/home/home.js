app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: "MainCtrl",
        resolve: {
        	skiAreas: function (AreaFactory){
                console.log('looking for ski areas')
        		return AreaFactory.findAll().then(function(areas){
                    console.log(areas);
                    return areas;
                });
        	}
        }
    });
});