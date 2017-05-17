'use strict'

// Dependecies
var express = require('express');
var app_functions = require('./routes/routes');
var bodyParser = require('body-parser');
var app = express();

// Set views path
app.use(express.static(__dirname+'/'));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({// to support URL-enconded bodies
}));

// Get the index page:
app.get('/', function(req, res){ //http request, response
	res.sendFile('index.html')
})

app.get('/price', app_functions.priceHandler);

// Start the server and socket
var server = app.listen(3000);

console.log('listening on port 3000')
