// PASSO 1: Referenciar os elementos necessários
const jovens = document.getElementById("inJovens");
const adultos = document.getElementById("inAdultos");
const idosos = document.getElementById("inIdosos");
const botao = document.getElementById("btCalcular");
const output = document.getElementById("output");

// PASSO 2: Criar lógica de cálculo
function calcularPercentual () {
    var total = Number(jovens.value) + Number(adultos.value) + Number(idosos.value);
    var percentualJovens = (Number(jovens.value) / total) * 100;
    var percentualAdultos = (Number(adultos.value) / total) * 100;
    var percentualIdosos = (Number(idosos.value) / total) * 100;
    output.innerHTML = "Do total de " + total + " trabalhadores, temos: <br>" +
    jovens.value + " jovens, que representam <strong>" + percentualJovens.toFixed(2) + "%</strong><br>" +
    adultos.value + " adultos, que representam <strong>" + percentualAdultos.toFixed(2) + "%</strong><br>" +
    idosos.value + " idosos, que representam <strong>" + percentualIdosos.toFixed(2) + "%</strong>";
}

// PASSO 3: aAdicionar escuta ao botão de clacular
botao.addEventListener("click", calcularPercentual);