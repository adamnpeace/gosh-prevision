"use strict";

const express = require('express')
const app = express()
const path = require('path')
//const layout = require('express-layout')
const bodyParser = require('body-parser')
const routes = require('./routes')
const validator = require('express-validator')
const cookieParser = require('cookie-parser')
const session = require('express-session')
//const flash = require('express-flash')
const helmet = require('helmet')
//const mysql = require('mysql')
//const myConnection = require('express-myconnection')
const methodOverride = require('method-override')


// Set templating language
app.set('view engine', 'ejs')
app.use('/', express.static(__dirname))

// Set routes
const index = require('./routes/index')

// Set up object to send to client devices
app.locals.var = []
// Allow above variable to be used by routes
/*
const middlewares = [
	helmet(),
	//layout(),
  express.static(path.join(__dirname, 'public')),
	myConnection(mysql, dbOptions, 'pool'),
  bodyParser.urlencoded({
	extended: true}),
	bodyParser.json(),
  validator(),
  cookieParser('super-secret-key'),
  session({
    secret: 'super-secret-key',
    key: 'super-secret-cookie',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }),
  flash(),
	methodOverride(function (req) {
		if (req.body && typeof req.body === 'object' && '_method' in req.body) {
			// look in urlencoded POST bodies and delete it
			var method = req.body._method
			delete req.body._method
			return method
		}
	}),
]
*/
//app.use(middlewares)
app.use('/', index)
//app.use('/index', host)
//app.use('/client', client)

app.use((req, res, next) => {
  res.status(404).send("Turn around now! Nothing exists under this URL")
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const port = 3000
app.listen(port, function () {
	console.log('Server running at http://localhost:'+port)
})
