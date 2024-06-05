const sequelize = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../db');
const usuario = db.define('usuario',{
    id    : {
        type:sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaKey:true
    },
    email : {
        type:sequelize.STRING,
        allowNull:false,
        unique:true
    } ,
    senha : {
        type:sequelize.STRING,
        allowNull:false
    },
    perfil: {
        type:sequelize.INTEGER,
        allowNull:false
    },
})

module.exports = usuario;