// Referênciando elementos DOM
const inNumero = document.getElementById("inNumero");
const outResultado = document.getElementById("outResultado");
const btCalcular = document.getElementById("btCalcular");

// Adicionando evento de escuta
btCalcular.addEventListener("click", calcular);

// Função que realiza o cálculo do fatorial
function calcular () {
    let numero = Number(inNumero.value);
    let fatorial, restante;

    if (Number.isInteger(numero) && numero > 0) {
        restante = numero;
        while (restante !== 1) {
            if (restante == numero) {
                fatorial = restante * (restante - 1);
            }
            else {
                fatorial *= (restante - 1)
            }
            restante--
        }
        outResultado.innerHTML = "O resultado é: " + fatorial;
    }
    else {
        inNumero.focus()
        alert("Para calcular um fatorial, digite um número inteiro positivo.")
    }
}