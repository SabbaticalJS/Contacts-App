//require the express module
var express = require('express');

//start up the express object
vap app = express();

//declare a port for the server
var PORT = process.env.PORT || 8000;

//start the server
app.listen(PORT);

//log to terminal where server will listen 
console.log("listening on PORT: ", PORT);