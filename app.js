process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * Load dependencies
 * ====================================================
 */
var express = require('express');

/**
 * Setup global basic configuration
 * ====================================================
 */
global.cf = require('./config/config');
global.utils = require('./config/utils');

var app = express();

// load express configuration
require('./config/express')(app);


app.use('/', function (req, res) {
	return res.render('pages/index.html');
});

app.set('port', process.env.PORT || global.cf.port);

global.lift(app);