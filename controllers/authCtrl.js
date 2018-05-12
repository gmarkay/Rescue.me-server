'use strict'
const passport = require("passport");

let user = null;

module.exports.register = (req, res, next) => {
  user = req.user.id;

  res.redirect('/profile');
};


module.exports.isLoggedIn = (req, res, next) => {
  console.log(user, 'user isloggedin');
  if (user)
  next();
  else{
    res.json("no user found");
  }
}

module.exports.login = (req, res, next) => {



};