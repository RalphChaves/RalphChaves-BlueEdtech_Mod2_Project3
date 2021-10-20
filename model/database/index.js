
// const {Sequelize} = require("sequelize");

// const sequelize = new Sequelize(process.env.DB_BASE, process.env.DB_USER, process.env.DB_pass, {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     dialect: 'postgres'
// });

const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {     
  dialect: 'postgres',
  protocol: 'postgres',     
  dialectOptions: {         
    ssl: {             
      require: true,             
      rejectUnauthorized: false         
    }     
  } 
}) 

module.exports = sequelize;

// async function conectado(){
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

// module.exports = {sequelize, conectado}