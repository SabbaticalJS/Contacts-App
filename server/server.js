//require the express module
var express = require('express');
var path = require('path');
var db = require('./database/connection');

// var bodyParser = require('body-parser');
// var http = require('http');
// var request = require('request');

//start up the express object
var app = express();

//declare a port for the server
var PORT = process.env.PORT || 8000;

console.log('what is --dirname',__dirname);

// app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'../client')));

//start the server
app.listen(PORT);

//log to terminal where server will listen 
console.log("listening on PORT:", PORT);