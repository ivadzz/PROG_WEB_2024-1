const express = require('express');
const vnp = require('./util/verificarNumeroPrimo');
const app = express();


app.get("/" ,function(req, res){
    res.send('pagina inicial!');
});

app.get("/ola", function(req, res){
    res.send('OLA');
});

app.get("/verificarNumeroPrimo/:n", function(req, res){
    let n = req.params.n;
    res.send(vnp.verificarNumeroPrimo(n));
});

const PORT = 8080;
app.listen(PORT,function(){
    console.log("app rodando na porta "+ PORT);
})