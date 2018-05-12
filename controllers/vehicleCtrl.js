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

// module.exports.getVehicles = (req, res, next) => {

//   findUserByFbID(req, res, next)
//   .then(user=>{
//     let user_id = user.id
//     return 
//   })

// }


module.exports.addVehicle = (req, res, next)=>{
  let Vehicle = req.app.get('models').Vehicle;

  findUserByFbID(req, res, next)
  .then(user=>{
    return Vehicle.create({
      userId: user.id,
      make: "Subaru",
      model: "Outback",
      color: "blue",
      plateNumber: "y44 dze",
    })
  }).then(newVeh => {
    res.status(201).json(newVeh);
  }).catch((err) => {
    next(err);
  })

}
