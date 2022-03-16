require('dotenv').config();
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();
const env = process.env;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', routes);

app.get("/", (req, res) => {
    res.json({mesage: 'OK'})
});

app.listen(env.PORT, ()=> {console.log(`Servidor conectado na porta ${env.PORT}`)});
