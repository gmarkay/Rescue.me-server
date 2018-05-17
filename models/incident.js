'use strict';

module.exports = (sequelize, DataTypes) => {
  var Incident = sequelize.define('Incident', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: DataTypes.TEXT,
    location_lat: DataTypes.DECIMAL,
    location_lng: DataTypes.DECIMAL,
    locationDescription: DataTypes.STRING,
    date: DataTypes.STRING,
    resolved: DataTypes.BOOLEAN
  }, {});
  Incident.associate = function(models) {
    Incident.hasMany(models.Report, {
      foreignKey: 'incidentId'
    });
    Incident.belongsTo(models.User, {foreignKey: 'UserId', as: 'User'})
    Incident.belongsTo(models.User, {foreignKey: 'rescuerId', as: 'rescuer'})

  };
  return Incident;
};