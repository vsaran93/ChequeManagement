'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ChequeDetail', {
      ChequeDetailId: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      AccountHolderName: {
        type: Sequelize.DataTypes.STRING,
      },
      Address: {
        type: Sequelize.DataTypes.STRING
      },
      ChequeNo: {
        type: Sequelize.DataTypes.STRING
      },
      IssuedDate: {
        type: Sequelize.DataTypes.DATE
      },
      ChequeDate: {
        type: Sequelize.DataTypes.DATE
      },
      Amount: {
        type: Sequelize.DataTypes.DOUBLE
      },
      IsReceived: {
        type: Sequelize.DataTypes.BOOLEAN
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: new Date()
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ChequeDetail')
  }
};
