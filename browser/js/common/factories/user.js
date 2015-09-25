app.factory('UserFactory', function (DS) {
    return DS.defineResource({
        name: 'users',
        idAttribute: "_id"
    });
}).run(function(UserFactory){});

