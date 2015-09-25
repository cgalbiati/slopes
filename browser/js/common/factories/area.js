app.factory('AreaFactory', function(DS) {
    return DS.defineResource({
        name: 'areas',
        idAttribute: '_id',
        relations: {
            hasMany:{
                activities: {
                    localKey: 'activityIds',
                    localField: 'activities'
                }
            }
        }
    });
}).run(function(AreaFactory) {});
