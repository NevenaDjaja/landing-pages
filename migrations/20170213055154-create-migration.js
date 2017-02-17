'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
            isEmail: true
          }
        },
        zipcode: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
            isNumeric: true
          }
        },
        entrycode: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notEmpty: true,
            isAlphanumeric: true
          }
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
