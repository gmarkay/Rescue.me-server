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

module.exports.getUserLocation = ({app},res, next)=>{
  let User = app.get('models').User;
  User.findAll({
    attributes: ['current_lat', 'current_lng']
  }).then(user=>{
    console.log(user, 'shoud be location');
    res.status(200).json(user);
  }).catch(err=>{
    console.log(err);
  });

}

module.exports.saveUserLocation = ({app, query:{userId}, body:{current_lat, current_lng}}, res, next)=>{
  let User = app.get('models').User;
  console.log(current_lat, current_lng, 'hello')
  User.findById(userId)
  .then(user=>{
    return user.updateAttributes({ current_lat, current_lng })
    console.log(user, 'shoud be location');
  }).then(updatedUser=>{
    console.log(updatedUser)
    res.status(200).json(updatedUser);
  }).catch(err=>{
    console.log(err);
  })
}

module.exports.addDefaultLocation = ({app, query:{userId}, body:{default_lat, default_lng}}, res, next) => {
  let User = app.get('models').User;
  User.findById(userId)
  .then(user=>{
    return user.updateAttributes({ default_lat, default_lng})
  }).then(updatedUser=>{
    res.status(200).json(updatedUser);
  }).catch(err=>{
    console.log(err);
  })
}
