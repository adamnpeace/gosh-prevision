"use strict";

const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./routes')
const validator = require('express-validator')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const helmet = require('helmet')
const methodOverride = require('method-override')
const http = require('http')

var http = require("http");
setInterval(function() {
    http.get("http://gosh-17.herokuapp.com");
}, 300000); // every 5 minutes (300000)

// Set templating language
app.set('view engine', 'ejs')
app.use('/', express.static(__dirname))

// Set routes
const index = require('./routes/index')

app.use('/', index)

app.use((req, res, next) => {
  res.status(404).send("Turn around now! Nothing exists under this URL")
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function () {
	console.log('Server running at http://localhost:'+port)
})
