const express = require('express');
const estoque = require('./src/estoque');

const app = express();

app.get('/adicionar/:id/:nome/:qtd', function (req, res) {
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let p = estoque.criarProduto(id, nome, qtd);
    estoque.adicionarProduto(p);
    res.send(p);
});

app.get('/listar', function (req, res) {
    res.send(estoque.listarProdutos());
});

app.get('/remover/:id', function (req, res) {
    let id = req.params.id;
    estoque.removerProduto(id);
    res.send(id);
});

app.get('/editar/:id/:qtd', function (req, res) {
    const id = req.params.id;
    const novaQuantidade = req.params.qtd;
    const editadoComSucesso = estoque.editarProduto(id, novaQuantidade);
    if (editadoComSucesso) {
        res.send(`Quantidade do produto ${id} editada para ${novaQuantidade}.`);
    } else {
        res.status(404).send('Produto não encontrado.');
    }
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});
