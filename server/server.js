var express = require('express');
var app = express();
var api = require('./api/api');
var config = require('./config/config');
// db.url is different depending on NODE_ENV
require('mongoose').connect(config.db.url);

// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api, including all routes
app.use('/api/', api);
// set up global error handling

// export the app for testing
module.exports = app;
