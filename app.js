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
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
// app.get('/front', function(req, res) {
//     res.sendFile(path.join(__dirname + '/front.html'));
// });
app.listen(8080);

