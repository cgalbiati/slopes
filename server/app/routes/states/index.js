var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var State = mongoose.model('State');

var missingItemHandler = function(error, cb) {
    console.log("couldn't find the state");
    error.status = 404;
    cb(error);
    //custom error handler for missing users and products
};

router.param('stateId', function(req, res, next, id) {
    Product.findById(id)
        .then(function(element) {
            req.state = element;
            next();
        })
        .then(null, function(error) {
            missingItemHandler(error, next);
        });
});

router.get('/', function(req, res, next) {
    State.find()
        .then(function(results) {
            res.json(results);
        })
        .then(null, next);
});

router.get('/:stateId', function(req, res) {
    res.json(req.foundProduct);
});

router.post('/', function(req, res, next) {
    State.create(req.body)
        .then(function(results) {
            res.json(results);
        })
        .then(null, next);
});


