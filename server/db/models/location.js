'use strict';
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
// var autoPopulate = require('mongoose-autopopulate')(mongoose);

var schema = new mongoose.Schema({
	street: {
		type: String,
	},
	city: {
		type: String,
	},
	 state:{
	 	type: ObjectId,
	 	ref: 'State',
     },
	zip:{
		type: String,
	},
	// country: {
	// 	type: ObjectId,
	// 	ref: 'Country',
	// 	autoPopulate: true
	// },
	latlgn: {
		type: String
	}
});
// schema.plugin(autoPopulate);
schema.statics.findOrCreate = function(locationObj) {
    var self = this;
    return self.find(locationObj).exec()
    .then(function(element) {
            console.log(element);
            if(element.length !== 0) return element[0];
            return self.create(locationObj);
        });
}

schema.virtual("fulladdress").get(function() {
		return this.street + ", " + (this.city) + ", " + (this.state) + ", " + (this.zip) + ", USA";
});

mongoose.model('Location', schema);