﻿var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(port);