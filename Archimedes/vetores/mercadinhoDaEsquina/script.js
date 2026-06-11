// Referênciamento de elementos

const inNome = document.querySelector("#inNome");
const inPreco = document.querySelector("#inPreco");
const outSaida = document.querySelector("#outSaida");
const btnRelatorio = document.querySelector("#btnRelatorio");
const btnAdicionarProduto = document.querySelector("#btnAdicionarProduto");
const inQuantidade = document.querySelector("#inQuantidade");
// Variáveis de controle

let produtos = []

// Associar evento de escuta ao botão

btnRelatorio.addEventListener("click", relatorio)
btnAdicionarProduto.addEventListener("click", addProduct)

// Chamada de função para calcular e exibir relatório

function relatorio () {
    outSaida.innerHTML = "";
    for (let ind = 0; ind < produtos.length; ind++) {
        let receita = produtos[ind].quantidade * produtos[ind].preco;
        let linha = `
        <tr>
            <td>${produtos[ind].nome}</td>
            <td>${produtos[ind].quantidade}</td>
            <td>R$ ${produtos[ind].preco.toFixed(2)}</td>
            <td>R$ ${receita.toFixed(2)}</td>
        </tr>
        `
        outSaida.innerHTML += linha;
    }
}

function addProduct () {
    // Receber os valores providos dos inputs
    const nome = inNome.value;
    const preco = Number(inPreco.value);
    const quantidade = Number(inQuantidade.value)

    // Verificação dos campos de input

    if (nome == "" || preco <= 0) {
        alert(preco <= 0 ? "O preço deve ser maior que 0" : "O campo nome foi deixado em branco");
        preco <= 0 ? inPreco.focus() : inNome.focus();
    }
    else if (quantidade <= 0 ) {
        alert("A quantidade deve ser um valor positivo maior que 0")
    }
    else { // Após as verificações, prepara-se o objeto
        let produto = {};
        produto.nome = nome;
        produto.preco = preco;
        produto.quantidade = quantidade;
        produtos.push(produto);
        inNome.value = "";
        inPreco.value = "";
        inQuantidade.value = "";
        inNome.focus();
    }

    relatorio();
}