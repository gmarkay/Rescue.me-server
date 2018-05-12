'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    fb_id: DataTypes.STRING,
    display_name: DataTypes.STRING,
    default_location:DataTypes.STRING
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Vehicle, {
      foreignKey: 'userId'
    });
    User.belongsToMany(User, {as: 'rescuer', foreignKey:'rescuerId', through: 'Incident' });
    User.belongsToMany(User, {as: 'rescuee', foreignKey:'rescueeId', through:'Incident' });

    
  };
  return User;
};