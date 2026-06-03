const container = document.querySelector("#container")

// Passo 2: Criar array de objetos
const aparelhos = [
    {
        title: "Apple iPhone 17 Pro",
        description: "O iPhone 17 Pro destaca-se pelo design renovado com estrutura unibody em alumínio para melhor dissipação térmica. Equipado com o chip A19 Pro, tela de 6,3 polegadas e bateria de longa duração, oferece desempenho topo de linha. Possui avançado conjunto de câmeras de 48 MP e resistência à água.",
        cores: "Branco, Cinza, Verde, Azul e Rosa",
        price: 8956.9,
        image: "https://cdn.awsli.com.br/2500x2500/2549/2549769/produto/370977456/01-0fc17xedh2.png"
    },
    {
        title: "Samsung S26 Ultra",
        description: "O Samsung Galaxy S26 Ultra é o smartphone mais avançado da marca. Com tela de 6,9 polegadas, câmera de 200 MP com abertura \(f/1.4\), processador Snapdragon 8 Elite Gen 5 e suporte à caneta S Pen, ele traz como grande novidade a tela de privacidade integrada.",
        cores: "Branco, Preto e Azul",
        price: 2988,
        image: "https://http2.mlstatic.com/D_NQ_NP_982767-MLA109132246068_042026-O.webp"
    },
    {
        title: "Redmi Poco X8 Pro",
        description: "O Poco X8 Pro é um smartphone intermediário premium da Xiaomi que se destaca pelo alto desempenho e bateria de longa duração. Ele oferece excelente custo-benefício para multitarefas e jogos, combinando processamento potente e câmeras de alta resolução.",
        cores: "Preto, Azul e Rosa",
        price: 2788.62,
        image: "https://xiaomishopcell.com.br/image_adds/celular-xiaomi-poco-x8-pro-nfc-dual-sim-de-512gb8gb-ram.jpg"
    },
];

// Função que cria o card
function criarCard(produto) {
    let card = `<div class="card" style="width: 19rem;">
    <img src="${produto.image}" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">${produto.title}</h5>
        <p class="card-text">${produto.description}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><strong>Cores:</strong> ${produto.cores}</li>
        <li class="list-group-item"><strong>Preço:</strong> R$ ${produto.price.toFixed(2)}</li>
    </ul>
    <div class="card-body">
        <a href="#" class="btn btn-primary">Compar Já!</a>
        <a href="#" class="card-link">Adicionar ao carrinho</a>
    </div>
    </div>
    `
    return card;
}

for (let index = 0; index < aparelhos.length; index++) {
    container.innerHTML += criarCard(aparelhos[index]);
}