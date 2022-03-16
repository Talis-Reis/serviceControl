const database = () =>{

require('dotenv').config();
const env = process.env;
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(env.DB_SCHEMA,env.DB_USER,env.DB_PASSWORD,{
    host: env.DB_HOST,
    dialect: env.DB_TYPE_DATABASE,
    port: env.DB_PORT
});

sequelize.authenticate().then(
    ()=>{
        console.log('Conexão com o banco de dados. STATUS: SUCESSO!');
    }
).catch((err)=>{
    console.log('Conexão com o banco de dados. STATUS: FALHA');
    console.log(`FALHA: ${err}`);
});

}


module.exports = database;