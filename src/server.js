const express = require("express");
const app = express();
const port = 8086;


app.get("/", (req,res)=>{
    res.json("OK");
});

app.listen(port, ()=>{
    console.log(`Servidor iniciado na porta ${port}`);
})


