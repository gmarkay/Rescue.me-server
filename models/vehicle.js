'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vehicle = sequelize.define('Vehicle', {
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    color: DataTypes.STRING,
    plateNumber: DataTypes.STRING
  }, {});
  Vehicle.associate = function(models) {
    Vehicle.belongsTo(models.User, {
      foreignKey: 'userId'
    })

  };
  return Vehicle;
};