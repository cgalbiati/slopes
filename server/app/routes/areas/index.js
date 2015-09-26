'use strict';
var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var Area = mongoose.model('Area');
// var Location = mongoose.model('Location');


var missingItemHandler = function(error, cb) {
    console.log("couldn't find the area");
    error.status = 404;
    cb(error);
    //custom error handler for missing stuff
};

router.param('areaId', function(req, res, next, id) {
    Area.findById(id)
        .then(function(element) {
            req.area = element;
            next();
        })
        .then(null, function(error) {
            missingItemHandler(error, next);
        });
});

router.get('/:areaId', function(req, res) {
    res.json(req.area);
});

router.get('/', function(req, res, next) {
    //req.query will contain search params for filtering areas
    var newObj = {};
    for(var i in req.query) {
        if(i !== 'user') {
            newObj[i] = RegExp('\w*' + req.query[i] + "\w*", 'i');
        }
    }
    Area.find(newObj)
        .then(function(results) {
            res.json(results);
        })
        .then(null, next);
});

router.post('/', function(req, res, next) {
    // if(!req.user.isLoggedIn) req.body.userId = userId;
    // need to verify users is logged in 
    var area = req.body;
    Area.create(area)
    .then(function(results) {
        res.json(results);
    })
    .then(null, next);
});

router.put('/:areaId', function(req, res, next) {
    // if(req.trail.user !== req.user._id && !req.user.isAdmin) return res.sendStatus(403);
    Object.keys(req.body).forEach(function(key) {
        if(req.area[key]) req.area[key] = req.body[key];
    });
    req.area.save()
        .then(function(element) {
            res.json(element);
        })
        .then(null, next);
});

router.delete('/:areaId', function(req, res, next) {
    // console.log('req.user', req.user);
    //     return res.sendStatus(403);
    // }
    // console.log('am I an admin?', req.user.isAdmin)
    req.area.remove()
        .then(function() {
            res.status(204).end();
        })
        .then(null, next);
});