const findUserByFbID = (req, res, next) => {

}

module.exports.getVehicles = (req, res, next) => {
  let user_id;
  let {User, Vehicle} = req.app.get('models');

   User.findOne({
    where: {
      fb_id: req.user.id
    }
  }).then(user => {
    user_id = user.id;
    return Vehicle.findAll({
      where: {
        userId: user_id
      }
    })
  }).then(cars => {
    console.log(cars, 'cars');
    res.status(200).json(cars);

  })


}


module.exports.addVehicle = (req, res, next) => {
  let {User, Vehicle} = req.app.get('models');
  console.log(req.body, 'body before then');

  User.findOne({
    where: {
      fb_id: req.user.id
    }
  }).then(user => {
    user_id = user.id;
    console.log(req.body, 'body in then');

    return Vehicle.create({
      userId: user_id,
      make: req.body.make,
      model: req.body.model,
      color: req.body.color,
      plateNumber: req.body.plateNumber
    })
  }).then(newVeh => {
    res.status(201).json(newVeh);
  }).catch((err) => {
    next(err);
  })


}
