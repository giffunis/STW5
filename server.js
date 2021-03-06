// server.js
// load the things we need
var express = require('express');
var app = express();

var path = require('path');

// instruct the app to use the `bodyParser()` middleware for all routes
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

var temperature = require("./sources/js/temperature.js");

// set the view engine to ejs
app.set('view engine', 'ejs');

// set views folder
app.set('views', path.join(__dirname, 'views'));

var expressLayouts = require('express-ejs-layouts');
app.set('layout', 'layout'); // defaults to 'layout'

// set static folder
app.use(express.static('sources'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index', { title:"Convert your temperature free!", resultado:" "});
});

app.post('/', function(req, res){
    var temp = new temperature(req.body.entrada);
    var output = temp.convert();
    res.render('pages/index',{title:"Convert your temperature free!", resultado: output});
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');
