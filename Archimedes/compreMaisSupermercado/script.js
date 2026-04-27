// Referênciação de variáveis globais e elementos DOM
const inProduct = document.getElementById("inProduct");
const inPrice = document.getElementById("inPrice");
const inQuantity = document.getElementById("inQuantity");
const btResult = document.getElementById("btResult");
const outResult = document.getElementById("outResult");

// Listagem de eventos de escuta
btResult.addEventListener("click", calcular);

// Função que realiza o cálculo de desconto
function calcular () {
    let product = inProduct.value;
    let price = Number(inPrice.value);
    let quantity = Number(inQuantity.value);
    
    if (inProduct.value == "") {
        alert("Informe o nome do produto");
        inProduct.focus();
    }
    else if (inPrice.value == "" || price < 0) {
        alert("O preço do produto não foi informado ou possui um valor negativo.");
        inPrice.focus();
    }
    else if (inQuantity.value == "" || quantity < 0) {
        alert("A quantidade de produtos não foi informada ou possui um valor negativo");
        inQuantity.focus();
    }
    else {
        let finallyValue, discount, result;
        if (quantity <= 3) {
            finallyValue = price * quantity;
            discount = finallyValue * 0;
            result = "<p>A quantidade de produtos não é o suficiente para obtenção de desconto.</p><br>" +
            "A compra de " + quantity + " unidades de " + product + " custará <strong>R$ " + (finallyValue - discount).toFixed(2) + "</strong>.";
        }
        else if (quantity > 3 && quantity <= 5) {
            finallyValue = price * quantity;
            discount = finallyValue * 0.05;
            result = "<p>Você obteve 5% de desconto e economizou R$ " + discount.toFixed(2) + "</p><br>" +
            "<p>A compra de " + quantity + " unidades de " + product + " sairá de <s>R$ " + finallyValue.toFixed(2) +
            "</s> por R$ <strong>" + (finallyValue - discount).toFixed(2) + "</strong>.</p>";
        }
        else {
            finallyValue = price * quantity;
            discount = finallyValue * 0.1;
            result = "<p>Você obteve 10% de desconto e economizou R$ " + discount.toFixed(2) + "</p><br>" +
            "A compra de " + quantity + " unidades de " + product + " sairá de <s>R$ " + finallyValue.toFixed(2) +
            "</s> por R$ <strong>" + (finallyValue - discount).toFixed(2) + "</strong>.";
        }      
        outResult.innerHTML = result
    }
}