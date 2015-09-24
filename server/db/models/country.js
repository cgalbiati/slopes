'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String
    },
    abrev: {
        type: String
    },
});

mongoose.model('Country', schema);