var express = require('express');
var app = express();
var path = require('path');

app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/bootstrap-4.0.0-dist', express.static(__dirname + '/bootstrap-4.0.0-dist'));
app.use('/vendor', express.static(__dirname + '/vendor'));
app.use('/build', express.static(__dirname + '/build'));
app.use('/HackathonDashboard', express.static(__dirname + '/HackathonDashboard'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendfile('index.html', { root: __dirname });
});

app.listen(8080);