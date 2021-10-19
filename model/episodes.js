const { Sequelize, DataTypes} = require('sequelize');

const database = require ('./database');

const Episodes = database.define("episodes", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    ep_name:{

        type: Sequelize.STRING,
        allowNull: false,    
    },
    ep_numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
    
    },
    ep_ima_url:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    ep_descricao:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
},{
    freezeTablename: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})

module.exports = Episodes;