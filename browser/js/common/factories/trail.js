app.factory('TrailFactory', function (DS) {
	return DS.defineResource({
		name: 'trails',
		idAttribute: "_id",
        relations: {
            belongsTo: {
                users: {
                    localKey: 'userId',
                    localField: 'user'
                },
				locations: {
                    localKey: 'locationId',
                    localField: 'location'
                },
            },
            hasMany: {
                  activities: {
                    localKeys: 'activityIds',
                    localField: 'activities'
                },
            }
        },
	});
}).run(function(TrailFactory){});