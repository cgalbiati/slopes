app.factory('ActivityFactory', function(DS) {
    return DS.defineResource({
        name: 'activities',
        idAttribute: '_id',
        relations: {
            belongsTo:{
                states: {
                    localKey: 'activityId',
                    localField: 'activity'
                }
            }
        }
    });
}).run(function(LocationFactory) {});
