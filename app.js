var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//import models
var subjectModel = require('./models/subject');
var subjectRoutes = require('./routes/subject');
var studentModel = require('./models/student');
var studentRoutes = require('./routes/student.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Routes
app.use('/student', studentRoutes);
app.use('/subject', subjectRoutes);

//conect the database
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/mq',  { useMongoClient: true });
console.log("Database connected");

//start server
app.listen(3000);
console.log("Server listeneing on port 3000");