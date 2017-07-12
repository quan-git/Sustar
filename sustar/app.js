var express = require('express');
var path = require('path');
<<<<<<< HEAD
<<<<<<< HEAD
var favicon = require('serve-favicon');
=======
var favicon = require('static-favicon');
>>>>>>> add express
=======
var favicon = require('static-favicon');
>>>>>>> f7b0e8e2a00bdea6f309add7b07888569cd80b0c
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

<<<<<<< HEAD
<<<<<<< HEAD
var index = require('./routes/index');
=======
var routes = require('./routes/index');
>>>>>>> add express
=======
var routes = require('./routes/index');
>>>>>>> f7b0e8e2a00bdea6f309add7b07888569cd80b0c
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

<<<<<<< HEAD
<<<<<<< HEAD
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

=======
=======
>>>>>>> f7b0e8e2a00bdea6f309add7b07888569cd80b0c
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


<<<<<<< HEAD
>>>>>>> add express
=======
>>>>>>> f7b0e8e2a00bdea6f309add7b07888569cd80b0c
module.exports = app;
