let produtos = [];

function criarProduto(id, nome, qtd) {
    let p = {
        id: id,
        nome: nome,
        qtd: qtd
    }
    return p;
}

function adicionarProduto(p) {
    produtos.push(p);
}

function listarProdutos() {
    return produtos;
}

function removerProduto(id) {
    produtos = produtos.filter((p) => {
        let x = p.id != id;
        return x;
    });
}

function editarProduto(id, novaQuantidade) {
    const produtoIndex = produtos.findIndex((p) => p.id === id);
    if (produtoIndex !== -1) {
        produtos[produtoIndex].qtd = novaQuantidade;
        return true;
    } else {
        return false;
    }
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProduto,
    editarProduto
};
