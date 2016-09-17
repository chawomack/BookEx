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

app.get('/', function(req, res) {
  res.sendFile('index.html')
})

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
