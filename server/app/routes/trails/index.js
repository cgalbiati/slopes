'use strict';
var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var Trail = mongoose.model('Trail');
// var Location = mongoose.model('Location');

var missingItemHandler = function(error, cb) {
    console.log("couldn't find the trail");
    error.status = 404;
    cb(error);
    //custom error handler for missing users and products
};

router.param('trailId', function(req, res, next, id) {
    Trail.findById(id)
        .then(function(element) {
            req.trail = element;
            next();
        })
        .then(null, function(error) {
            missingItemHandler(error, next);
        });
});

router.get('/:trailId', function(req, res) {
    res.json(req.trail);
});

router.get('/', function(req, res, next) {
    var newObj = {};
    for(var i in req.query) {
        newObj[i] = RegExp('\w*' + req.query[i] + "\w*", 'i');
    }
    Trail.find(newObj)
        //req.query will contain search params for filtering products
        .then(function(results) {
            res.json(results);
        })
        .then(null, next);
});

router.post('/', function(req, res, next) {
    // if(!req.user.isLoggedIn) req.body.userId = userId;
    // need to verify users is logged in - in order to add a product to their page
    // if user is admin, should be able to create product on anyones pag
    var trailObj = req.body;
    trailObj.user = req.user._id;
    Trail.create(trailObj)
    .then(function(results) {
        res.json(results);
    })
    .then(null, next);
});

router.put('/:trailId', function(req, res, next) {
    // if(req.trail.user !== req.user._id && !req.user.isAdmin) return res.sendStatus(403);
    //if user is an admin or is the owner of the product, allow for changes
    Object.keys(req.body).forEach(function(key) {
        if(req.trail[key]) req.trail[key] = req.body[key];
    });
    req.trail.save()
        .then(function(element) {
            res.json(element);
        })
        .then(null, next);
});

router.delete('/:trailId', function(req, res, next) {
    // console.log('req.user', req.user);
    // if (!req.user || (!req.user.isAdmin && req.foundProduct.user !== req.user._id)){
    //     return res.sendStatus(403);
    // }
    // console.log('am I an admin?', req.user.isAdmin)
    req.trail.remove()
        .then(function() {
            res.status(204).end();
        })
        .then(null, next);
});

