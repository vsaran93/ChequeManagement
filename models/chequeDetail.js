const { DataTypes } = require('sequelize');
const sequelize = require('../connection/dbConnection');

let ChequeDetail = sequelize.define('ChequeDetail', {
    ChequeDetailId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    AccountHolderName: {
        type: DataTypes.STRING,
    },
    Address: {
        type: DataTypes.STRING
    },
    ChequeNo: {
        type: DataTypes.STRING
    },
    IssuedDate: {
        type: DataTypes.DATE
    },
    ChequeDate: {
        type: DataTypes.DATE
    },
    Amount: {
        type: DataTypes.DOUBLE
    },
    IsReceived: {
        type: DataTypes.BOOLEAN
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports = ChequeDetail;