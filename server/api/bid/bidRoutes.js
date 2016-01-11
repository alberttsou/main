// use as template to add any new routes/endpoints on api

var router = require('express').Router();
var logger = require('../../util/logger');
var controller = require('./bidController'); //swap for ./[x]Controller.js
var createRoutes = require('../../util/createRoutes');
createRoutes(controller, router);

module.exports = router;