var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendfile(path.join(__dirname + '/index.html'));
});

app.listen(8080);