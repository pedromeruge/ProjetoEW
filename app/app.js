var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// add routes
app.use('/', require('./routes/index'));
app.use('/ruas', require('./routes/ruas'));
app.use('/entidades', require('./routes/entidades'));
app.use('/lugares', require('./routes/lugares'));
app.use('/datas', require('./routes/datas'));
app.use('/login', require('./routes/login'));
app.use('/registar', require('./routes/registar'))
app.use('/utilizadores', require('./routes/utilizadores'))
app.use('/comentarios', require('./routes/comentarios'))
app.use('/imagens', require('./routes/imagens'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;