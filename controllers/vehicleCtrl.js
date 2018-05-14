'use strict';

module.exports.getVehicles = ({app, query:{userId}}, res, next) => {
  let Vehicle = app.get('models').Vehicle;
    Vehicle.findAll({
      where: {
        userId: userId
      }
    }).then(cars => {
      console.log(cars, 'cars');
      res.status(200).json(cars);
    })
}

module.exports.addVehicle = ({app, query:{userId}, body: { make, model, color, plateNumber }},  res, next) => {
  let Vehicle = app.get('models').Vehicle;

  Vehicle.create({
    userId,
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
