var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(()=>{console.log('I AM A MIDDLEWARE!!!!')})

app.use((req, res, next) => {
    console.log('I AM A MIDDLEWARE 2 ');
    next();
})

app.use((req, res, next) => {
    console.log('I AM A MIDDLEWARE 1');
    next();
})


app.use('/', indexRouter);
//localhost:3000/users
app.use('/users', usersRouter);

app.use((err, req, res, next) => {
    console.log('I AM A MIDDLEWARE ERR FUNCTION');
    next();
})

module.exports = app;
