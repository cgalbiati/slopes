'use strict';
var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var Activity = mongoose.model('Activity');


var missingItemHandler = function(error, cb) {
    console.log("couldn't find the activity");
    error.status = 404;
    cb(error);
    //custom error handler for missing users and Activitys
};

router.param('activityId', function(req, res, next, id) {
    Activity.findById(id)
        .then(function(element) {
            req.activity = element;
            next();
        })
        .then(null, function(error) {
            missingItemHandler(error, next);
        });
});

router.get('/:activityId', function(req, res) {
    res.json(req.activity);
});

router.get('/', function(req, res, next) {
    Activity.find()
        .then(function(results) {
            res.json(results);
        })
        .then(null, next);
});

router.post('/', function(req, res, next) {
    var activityObj = req.body;
    Activity.create(activityObj)
    .then(function(results) {
            res.json(results);
        })
    .then(null, next);
});

router.put('/:activityId', function(req, res, next) {
    Object.keys(req.body).forEach(function(key) {
        if(req.activity[key]) req.activity[key] = req.body[key];
    });
    req.activity.save()
        .then(function(element) {
            res.json(element);
        })
        .then(null, next);
});

router.delete('/:activityId', function(req, res, next) {
    req.activity.remove()
        .then(function() {
            res.status(204).end();
        })
        .then(null, next);
});
