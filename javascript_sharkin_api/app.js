var moment = require('moment'); 
moment.locale('pt-br');
var express = require('express');
const nodeSchedule = require('node-schedule');
var path = require('path');
var logger = require('morgan');
var usersRouter = require('./app/routes/users');
var sharkinRouter = require('./app/routes/sharkin');
require('./config/database');
var RevertAll = require('./app/OtherFunctions/RevertAll');
var app = express();
const job = nodeSchedule.scheduleJob('0 20 * * *', () => {
    RevertAll();
    });
// Connecting to routes
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', usersRouter);
app.use('/sharkin', sharkinRouter);

module.exports = app;
