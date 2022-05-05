const express = require('express');
const app = express();

var user = require('./user');
var product = require('./product');
var promotion = require('./promotion');
var service = require('./service');
var cms = require('./cms');
var vendor = require('./vendor');

// user route file
app.use('/user', user);
app.use('/product', product);
app.use('/promotion', promotion);
app.use('/service', service);
app.use('/cms', cms);
app.use('/vendor', vendor);

module.exports = app;