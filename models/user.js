'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    fb_id: DataTypes.STRING,
    display_name: DataTypes.STRING,
    default_lat:DataTypes.DECIMAL,
    default_lng:DataTypes.DECIMAL,
    current_lat:DataTypes.DECIMAL,
    current_lng:DataTypes.DECIMAL,


  }, {});
  User.associate = function (models) {
    User.hasMany(models.Vehicle, {
      foreignKey: 'userId'
    });
    User.hasMany(models.Incident)


    
  };
  return User;
};