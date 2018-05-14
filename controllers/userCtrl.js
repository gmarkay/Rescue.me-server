'use strict'
const passport = require("passport");

const findUserByFbID = (req, res, next) => {
  return new Promise((resolve, reject) => {
    let User = req.app.get('models').User;
    User.findOne({
      where: {
        fb_id: req.user.id
      }
    })
    .then(user=>{
      resolve(user);
    })
  })
}

module.exports.getUsers = (req, res, next) => {
  findUserByFbID(req, res, next)
    .then(user => {
      res.status(200).json(user);
    })
}
module.exports.addDefaultLocation = ({app, query:{user_id}, body:{default_lat, default_lng}}, res, next) => {
  let User = app.get('models').User;
  User.findById(user_id)
  .then(user=>{
    return user.updateAttributes({ default_lat, default_lng})
  }).then(updatedUser=>{
    res.status(200).json(updatedUser);
  }).catch(err=>{
    console.log(err);
  })
}
