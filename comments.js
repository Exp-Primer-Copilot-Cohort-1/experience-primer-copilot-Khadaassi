// Create web server

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var compression = require('compression');
var helmet = require('helmet');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var flash = require('connect-flash');

app.use(helmet());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(session({
  secret: 'asdfasdfasdfasdfasdfasdfasdfasdf',
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}));
app.use(flash());

var authData = {
  email: '
