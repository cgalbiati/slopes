app.factory('ActivityFactory', function(DS) {
    return DS.defineResource({
        name: 'activities',
        idAttribute: '_id'
    });
}).run(function(ActivityFactory) {});
