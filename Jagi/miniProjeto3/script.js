// Referênciando elementos
const btnGerarJSON = document.querySelector("#btnGerarJSON");
const cards = document.querySelector("#cards");
const outSaidaJSON = document.querySelector("#outSaidaJSON");

// Listando objetos
let objetoCards = [
    {
        img: "",
        price: "",
        title: "",
        description: "",
        estoque: 30
    }
]

function gerarCards (produto) {
    produto.actions = ["Detalhes"];
    if (produto.estoque > 0) {
        produto.actions.push("Comprar");
    }
    let actions = ""
    let cardProduto = `
    <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${produto.img}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${produto.title}</h5>
            <p class="card-text">${produto.description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">R$ ${produto.price.toFixed(2)}</li>
            <li class="list-group-item">${produto.estoque} Disponíveis</li>
        </ul>
        <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">${produto.actions}</a>
        </div>
    </div>
    `
}
