var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var path = require('path');

// viewed at http://localhost:8080
app.get('/',cors(), function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/btransfer', function(req, res) {
    res.sendFile(path.join(__dirname + '/btransfer.html'));
});
app.get('/quartile', function(req, res) {
    res.sendFile(path.join(__dirname + '/quartile.html'));
});
app.get('/govcon', function(req, res) {
    res.sendFile(path.join(__dirname + '/govcon.html'));
});
app.get('/goven', function(req, res) {
    res.sendFile(path.join(__dirname + '/goven.html'));
});
app.get('/trade', function(req, res) {
    res.sendFile(path.join(__dirname + '/trade.html'));
});
app.get('/topmar', function(req, res) {
    res.sendFile(path.join(__dirname + '/topmar.html'));
});
app.get('/govsize', function(req, res) {
    res.sendFile(path.join(__dirname + '/govsize.html'));
});
app.get('/milin', function(req, res) {
    res.sendFile(path.join(__dirname + '/milin.html'));
});
app.get('/intleg', function(req, res) {
    res.sendFile(path.join(__dirname + '/intleg.html'));
});
app.get('/soundmoney', function(req, res) {
    res.sendFile(path.join(__dirname + '/soundmoney.html'));
});
app.get('/front', function(req, res) {
    res.sendFile(path.join(__dirname + '/front.html'));
});
app.listen(8080);

