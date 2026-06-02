const container = document.querySelector("#container")

// Passo 2: Criar array de objetos
const aparelhos = [
    {nome: "Redmi", modelo: "note 12 pro 5g", cor: "branco", preco: 1234},
    {nome: "iPhone", modelo: "15", cor: "azul", preco: 4567},
    {nome: "Samsung", modelo: "A56", cor: "cinza", preco: 2345}
];

// Função que cria o card
function criarCard(nome, modelo, cor, preco) {
    let card = `<div class="card" style="width: 18rem;">
    <div class="card-header">
        Telefone ${nome}
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">Modelo: ${modelo}</li>
        <li class="list-group-item">Cor: ${cor}</li>
        <li class="list-group-item">Pelo preço de: R$ ${preco.toFixed(2)}</li>
    </ul>
    </div>
    `
    return card;
}

for (let index = 0; index < aparelhos.length; index++) {
    container.innerHTML += criarCard(aparelhos[index].nome, aparelhos[index].modelo, aparelhos[index].cor, aparelhos[index].preco);
}