// Referencindo documento HTML
const inPeso = document.getElementById("inPeso");
const outMaiorPeso = document.getElementById("outMaiorPeso");
const outMenorPeso = document.getElementById("outMenorPeso");
const outMediaPeso = document.getElementById("outMediaPeso");
const btCalcular = document.getElementById("btCalcular");
let pesos = []
// Associando evento de escuta
btCalcular.addEventListener("click", calcular);

// Criando funçao de cálculo
function calcular () {
    let peso = Number(inPeso.value);
    let pesoMenor, pesoMaior, pesoMedio
    if (peso == 0) {
        alert("O campo peso não foi preenchido");
    }
    else {
        pesos += peso;
        pesoMenor = Math.min(pesos)
        pesoMaior = Math.max(pesos)
        // pesoMedio = Math.
        // Continuar daqui.
    }
}