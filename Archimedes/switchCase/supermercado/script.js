// REFERÊNCIAÇÃO
const inQuantidade = document.getElementById("inQuantidade");
const inPreco = document.getElementById("inPreco");
const sltSetor = document.getElementById("sltSetor");
const btCalcular = document.getElementById("btCalcular");
const outResultado = document.getElementById("outResultado");

// ASSOCIAÇÃO DE EVENTOS A FUNÇÃO
btCalcular.addEventListener("click", calcular);
sltSetor.addEventListener("change", calcular);

// FUNÇÃO DE CÁLCULO DE DESCONTO
function calcular() {
    let quantidade = Number(inQuantidade.value);
    let preco = Number(inPreco.value);
    let setor = sltSetor.value;
    let result, desconto, precoFinal;

    if (quantidade <= 0) {
        inQuantidade.focus();
        alert("A quantidade mínima é 1.");
    }
    else if (preco <= 0) {
        inPreco.focus();
        alert("O preço mínimo deve ser R$ 0,10.");
    }
    else {
        if (quantidade >= 3 && quantidade < 6) {
            switch (setor) {
                case "bebidas":
                    precoFinal = quantidade * preco * 0.95;
                    result = quantidade + " bebidas custam R$ " + precoFinal.toFixed(2) + " com 5% de desconto aplicado.";
                    break;
                case "laticinios":
                    precoFinal = quantidade * preco * 0.97;
                    result = quantidade + " laticinios custam R$ " + precoFinal.toFixed(2) + " com 3% de desconto aplicado.";
                    break;
                case "frutas":
                    precoFinal = quantidade * preco * 0.98;
                    result = quantidade + " bebidas custam R$ " + precoFinal.toFixed(2) + " com 2% de desconto aplicado.";
                    break;
                case "outros":
                    precoFinal = quantidade * preco * 1;
                    result = quantidade + " bebidas custam R$ " + precoFinal.toFixed(2) + ". Sem desconto para essa quantidade de produtos.";
                    break;
            }
        }
        else if (quantidade > 6) {
            switch (setor) {
                case "bebidas":
                    precoFinal = quantidade * preco * 0.90;
                    result = quantidade + " bebidas custam R$ " + precoFinal.toFixed(2) + " com 10% de desconto aplicado.";
                    break;
                case "laticinios":
                    precoFinal = quantidade * preco * 0.95;
                    result = quantidade + " laticinios custam R$ " + precoFinal.toFixed(2) + " com 5% de desconto aplicado.";
                    break;
                case "frutas":
                    precoFinal = quantidade * preco * 0.97;
                    result = quantidade + " bebidas custam R$ " + precoFinal.toFixed(2) + " com 3% de desconto aplicado.";
                    break;
                case "outros":
                    precoFinal = quantidade * preco * 0.98;
                    result = quantidade + " bebidas custam R$ " + precoFinal.toFixed(2) + " com 2% de desconto aplicado.";
                    break;
            }
        }
        else {
            precoFinal = quantidade * preco;
            result = quantidade + " bebidas custam R$ " + precoFinal.toFixed(2) + ". Sem desconto para essa quantidade de produtos";
        }
        outResultado.innerHTML = result;
    }
}