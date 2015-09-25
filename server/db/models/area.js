'use strict';
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;


var schema = new mongoose.Schema({
    name: {
        type: String
    },
    activities: [{
        type: ObjectId,
        ref: 'activity'
    }],
    location: {
        type: ObjectId,
        ref: 'location'
    },
});

mongoose.model('Area', schema);