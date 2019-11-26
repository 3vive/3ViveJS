var express = require('express');
var app = express();
var path = require('path');
var request = require('request');


// viewed at http://localhost:8080
app.use('/supportingFiles', express.static(__dirname + '/supportingFiles'));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});




app.listen(8080);
