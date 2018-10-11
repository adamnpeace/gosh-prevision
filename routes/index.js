"use strict";
var express = require('express')
var app = express()

app.get('/', function (req, res) {
	// render to views/index.ejs template file
		res.render('index')

})


module.exports = app
