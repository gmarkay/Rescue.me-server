'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Incidents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      locationDescription: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      resolved: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Incidents');
  }
};