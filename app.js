var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


// connection with mlab
var myUri = require('config').mongoUri;
mongoose.Promise = global.Promise;
mongoose.connect(myUri)
    .then(() => console.log('connection successful'))
.catch((err) => console.error(err));

require('./models/model_reg');
require('./models/models');


var index = require('./routes/index');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);

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

// port on which app is listening
app.listen('8080', function (err) {
    if (err) return console.log('Error');
    console.log('Listening on 8080')
});