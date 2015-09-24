'use strict';
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;


var schema = new mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    location: {
        type: ObjectId,
        ref: 'location'
    },
})

mongoose.model('LocArea', schema);