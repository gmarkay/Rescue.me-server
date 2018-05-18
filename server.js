'use strict';
const express = require('express');
const passport = require('passport');
const bodyParser = require("body-parser");

// const FacebookStrategy = require('passport-facebook').Strategy;
const routes = require('./routes');
const { loginStrat } = require('./config/authConfig');


passport.use(loginStrat);


passport.serializeUser(function(user, cb) {
  cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('models', require('./models'));
app.use(require('express-session')({ secret: 'AAAA', resave: true, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());
app.use(routes);


  
  
  const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});