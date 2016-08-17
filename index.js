var express = require('express');
var app = express();
var path = require('path');
v
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname +'/app/index.html'));
});


app.get('/leet', function (req, res) {
    res.send('We are Legion');
});

app.listen(1337);

console.log('Listening on l337');
