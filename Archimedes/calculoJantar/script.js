// 1° PASSO: Criar refer~encias para os elementos HTML
const inValorConta = document.getElementById("inValorConta");
const btTotalizar = document.getElementById("btTotalizar");
const outTotalConta = document.getElementById("outTotalConta");
// 2° PASSO: Criar um evento para o botão
btTotalizar.addEventListener("click", totalizarConta)

function totalizarConta () {
    var valorConta = Number(inValorConta.value);
    var taxaGarcom = valorConta * 0.1
    var totalConta = valorConta + taxaGarcom
    outTotalConta.innerHTML = "Taxa do garçom: R$ " + taxaGarcom.toFixed(2) +
    "<br> Total da conta: R$ " + totalConta.toFixed(2)
    
}
