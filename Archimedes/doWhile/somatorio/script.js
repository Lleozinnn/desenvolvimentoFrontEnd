// Referênciando elementos DOM
const inNumeroX = document.getElementById("inNumeroX");
const inNumeroN = document.getElementById("inNumeroN");
const outResultado = document.getElementById("outResultado");
const btCalcular = document.getElementById("btCalcular");

// Adicionando evento de escuta
btCalcular.addEventListener("click", calcular);

// Função que realiza o cálculo do fatorial
function calcular () {
    let numero = Number(inNumero.value);

    if (Number.isInteger(numero) && numero % 2 == 0 && numero > 0) {
        
        outResultado.innerHTML = `O número ${numero} atende aos requisitos.`;
    }
    else {
        inNumero.focus()
        alert("Para calcular um fatorial, digite um número inteiro, positivo e par.")
    }
}