// PASSO 1: Referênciar as variáveis
const inTimeA = document.getElementById("inGolsA");
const inTimeB = document.getElementById("inGolsB");
const btResult = document.getElementById("btResult");
const outResult = document.getElementById("outResult");

// PASSO 2: Criar função
function processarResultado () {
    // Variáveis de controle
    var resultado = "";
    var diferenca = 0;
    // Receber valores
    var golA = Number(inTimeA.value);
    var golB = Number(inTimeB.value);
    // Verificar
    if (golA < 0 || golA == "" || golB < 0 || golB == "") {
        alert("Algum campo não está preenchido e/ou possui valor menor que zero");
    }
    else {
        var diferenca = 0
        if (golA > golB) {
            diferenca = golA - golB;
            if (diferenca >= 2) {
                resultado = "Time A venceu de goleada.";
            }
            else {
                resultado = "Time A venceu.";
            }
        }
        else if (golB > golA) {
            diferenca = golB - golA
            if (diferenca >= 2) {
                resultado = "Time B venceu de goleada.";
            }
            else {
                resultado = "Time B venceu.";
            }
        }
        else {
            resultado = "Houve empate!";
        }
    }
    outResult.textContent = resultado;
}
// PASSO 3: Associar escuta de evento à função que processa o resultado
btResult.addEventListener("click", processarResultado);