const findUserByFbID = (req, res, next) => {

}

module.exports.getVehicles = ({app, query:{user_id}}, res, next) => {
  let Vehicle = app.get('models').Vehicle;
  console.log(user_id, 'query');
  // console.log(req.params, 'qrstuv');
  // console.log(req.body, 'hijkl')

    Vehicle.findAll({
      where: {
        userId: user_id
      }
    }).then(cars => {
      console.log(cars, 'cars');
      res.status(200).json(cars);
    })
}

module.exports.addVehicle = ({app, query:{user_id}, body: { make, model, color, plateNumber }},  res, next) => {
  let Vehicle = app.get('models').Vehicle;
  console.log(user_id, 'id')
  console.log(make, model, color, plateNumber, 'body');

  Vehicle.create({
    user_id,
    make,
    model,
    color,
    plateNumber
  }).then(newVeh => {
    res.status(201).json(newVeh);
  }).catch((err) => {
    next(err);
  })


}
