const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const port = 8080;

app.get('/somar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.somar(a, b);
    res.send(resultado.toString());
});

app.get('/subtrair/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.subtrair(a, b);
    res.send(resultado.toString());
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.multiplicar(a, b);
    res.send(resultado.toString());
});

app.get('/dividir/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    if (b === 0) {
        res.status(400).send('Não é possível dividir por zero');
        return;
    }
    const resultado = calculadora.dividir(a, b);
    res.send(resultado.toString());
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
