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

module.exports.addDefaultLocation = (req, res, next) => {
  let default_lat = req.body.default_lat;
  let default_lng = req.body.default_lng;
  console.log('am i here?')
  findUserByFbID(req, res, next)
  .then(user=>{
    return user.updateAttributes({ default_lat:default_lat, default_lng:default_lng})
  }).then(user=>{
    res.status(200).json(user);
  });

}
