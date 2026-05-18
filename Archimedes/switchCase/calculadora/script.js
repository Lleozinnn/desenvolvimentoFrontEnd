// REFERÊNCIANDO ELEMENTOS
const inOperando1 = document.getElementById("inOperando1");
const inOperando2 = document.getElementById("inOperando2");
const sltOperacao = document.getElementById("sltOperacao");
const btCalcular = document.getElementById("btCalcular");
const btLimpar = document.getElementById("btLimpar");
const outResultado = document.getElementById("outResultado");

// ADICIONANDO EVENTO DE ESCUTA NO BOTÃO
btCalcular.addEventListener("click", calcular)
btLimpar.addEventListener("click", limpar)
sltOperacao.addEventListener("change", calcular)
// FUNÇÃO QUE REALIZA O CÁLCULO
function calcular () {
    let operando1 = Number(inOperando1.value);
    let operando2 = Number(inOperando2.value);
    let operacao = sltOperacao.value;
    let resultado, saida;
    switch (operacao) {
        case "soma":
            resultado = operando1 + operando2;
            saida = operando1 + " + " + operando2 + " = " + resultado;
            break;
        case "subtracao":
            resultado = operando1 - operando2;
            saida = operando1 + " - " + operando2 + " = " + resultado;
            break;
        case "multiplicacao":
            resultado = operando1 * operando2;
            saida = operando1 + " * " + operando2 + " = " + resultado;
            break;
        case "divisao":
            if (operando2 == 0) {
                saida = "Não é possível dividir por zero"
                inOperando2.value = ""
                inOperando2.focus()
            }
            else {
                resultado = operando1 / operando2;
                saida = operando1 + " / " + operando2 + " = " + resultado;
            }
            break;
        case "potenciacao":
            resultado = Math.pow(operando1, operando2);
            saida = operando1 + " ^ " + operando2 + " = " + resultado;
            break;
        case "raiz":
            if (operando1 < 0) {
                saida = "Não é possível calcular raiz de numero negativo."
                inOperando1.value = ""
                inOperando1.focus()
            }
            else {
                resultado = Math.sqrt(operando1);
                saida = "Raiz(" + operando1 + ") = " + resultado;
            }
            break;
    }
    outResultado.innerHTML = saida;
}
function limpar () {
    inOperando1.value = ""
    inOperando2.value = ""
    sltOperacao.value = "soma"
    outResultado.innerHTML = ""
    inOperando1.focus()
}