'use strict';
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
// var extend = require('mongoose-schema-extend');

var schema = new mongoose.Schema({
    name: {
    	type: String
    },
    path: {
        type: String
    },
	user: {
		type: ObjectId, 
		ref:"User",
	},
	activities: [{
		type: ObjectId, 
		ref:"Activity",
	}],
	area: {
		type: ObjectId, 
		ref:"Area",
	},

});

// var SkiTrailSchema = schema.extend({
// 	snow
// });

mongoose.model('Trail', schema);
