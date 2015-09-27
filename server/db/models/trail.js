'use strict';
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
// var extend = require('mongoose-schema-extend');

var schema = new mongoose.Schema({
    name: {
    	type: String
    },
    path: [{
    	H: Number,
    	L: Number
    }],
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
	elevObj: [{
		elevation: Number,
		location: {
			H: Number,
			L: Number
		},
		resolution: Number,
	}],

});

// var SkiTrailSchema = schema.extend({
// 	snow
// });

mongoose.model('Trail', schema);
