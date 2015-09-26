'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/members', require('./members'));
router.use('/users', require('./users'));
router.use('/trails', require('./trails'));
router.use('/states', require('./states'));
router.use('/locations', require('./locations'));
router.use('/areas', require('./areas'));
router.use('/activities', require('./activities'));

// router.use('/activites', require('./activites'));


// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
