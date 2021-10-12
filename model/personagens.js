const { Sequelize, DataTypes} = require('sequelize');

const database = require ('./database');

const Personagens = database.sequelize.define("personagens", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    pers_name:{

        type: Sequelize.STRING,
        allowNull: false,    
    },
    raca: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    habilidade:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    idade:{
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    ima_url:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    equipamento:{
    type: Sequelize.STRING,
        allowNull: false,
    }
},{
    freezeTablename: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
})

module.exports = Personagens;