'use strict'
const passport = require("passport");

let user;

module.exports.register = (req, res, next) => {
  user = req.user.id;
  res.redirect('/profile');
};

module.exports.isLoggedIn = (req, res, next) => {
  console.log(req.user, 'req user isloggedin');
  if (req.user)
  next();
  else{
    res.json("no user found");
  }
}
