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
  // console.log(req.user);
  findUserByFbID(req, res, next)
    .then(user => {
      res.status(200).json(user);
    })
}

module.exports.addDefaultLocation = (req, res, next) => {
  findUserByFbID(req, res, next)
  .then(user=>{
    user.updateAttributes({ default_location: req.body.default_location })

  })

}
