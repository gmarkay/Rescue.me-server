'use strict';
module.exports = (sequelize, DataTypes) => {
  var Report = sequelize.define('Report', {
    description: DataTypes.TEXT
  }, {});
  Report.associate = models=> {
    Report.belongsTo(models.Incident, {
      foreignKey: 'incidentId'
    })
  };
  return Report;
};