var express = require('express');
var path = require('path');
var logger = require('morgan');
var usersRouter = require('./app/routes/users');
var sharkinRouter = require('./app/routes/sharkin');
require('./config/database');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', usersRouter);
app.use('/sharkin', sharkinRouter);

module.exports = app;
