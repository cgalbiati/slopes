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
	type: [{
		type: ObjectId, 
		ref:"Activity",
	}],
	locArea: {
		type: ObjectId, 
		ref:"LocArea",
	},
	
});

// var SkiTrailSchema = schema.extend({
// 	snow
// });

mongoose.model('Trail', schema);
