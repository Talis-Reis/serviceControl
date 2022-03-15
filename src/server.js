const express = require("express");
const { json } = require("express/lib/response");
const { Sequelize } = require('sequelize');
const app = express();
const port = 8086;  
const bodyParser = require('body-parser');

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req,res)=>{
    res.json({mesage: "OK"});
});

app.post("/cadastro", (req, res) =>{
    const teste = req.body.homeOffice;
    res.json({HomeOffice: teste});
})

//conexão com o banco de dados
const sequelize = new Sequelize('taskcalender', 'talisreis', '@bcard123', {
    host: '192.168.254.8',
    dialect: 'mysql'
});

sequelize.authenticate().then(()=>{
    console.log('Conexão com o banco de dados. STATUS: SUCESSO!');
}).catch((erro)=>{
    console.log('Conexão com o banco de dados. STATUS: FALHA');
    console.log(`FALHA: ${erro}`);
})

app.listen(port, ()=> {console.log(`Servidor conectado na porta ${port}`)});
