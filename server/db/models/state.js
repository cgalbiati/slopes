'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String
    },
    abrv: {
        type: String
    },
});

mongoose.model('State', schema);