var express     = require('express');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var app         = express();
const port = 3500;

// DB Models
var School = require('./Schools');

//Connect to DB
mongoose.connect('mongodb://localhost:27017/bookexchange');
var DB = mongoose.connection;
DB.on('error', console.error.bind(console, 'connection error:'));
DB.once('open', function() {
  console.log("connected to database!");
});


app.use('/', express.static('dist'));

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    //intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
      //respond with 200
      res.send(200);
    }
    else {
    //move on
      next();
    }
});
app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send(200);
});

app.get('/', function(req, res) {
  res.sendFile('index.html')
});

app.get('/schools/?', function(req, res) {
  var keyName = Object.keys(req.query)[0];
  let regex = new RegExp("^" + req.query[keyName]);
  School.find({name : regex}, function(err, schools) {
    if (err) return handleError(err);
    res.json({status: "success", data: schools});
  });
})

app.listen(port);
console.log('Magic happens at http://localhost:' + port);
