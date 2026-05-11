// Referênciando elementos DOM
const inNome = document.getElementById("nome");
const inNota1 = document.getElementById("nota1");
const inNota2 = document.getElementById("nota2");
const inFaltas = document.getElementById("inFaltas");
const outConceitoAluno = document.getElementById("outConceitoAluno");
const outPercentualFaltas = document.getElementById("outPercentualFaltas");
const outRelatorio = document.getElementById("outRelatorio");
const btVerificar = document.getElementById("btVerificar");

// Adicionando evento de escuta ao botão
btVerificar.addEventListener("click", verificarAluno);

// Criação da função para verificar aluno
function verificarAluno () {
    // Verifica os campos de entrada
    let nota1 = Number(inNota1.value)
    let nota2 = Number(inNota2.value)
    let faltas = Number(inFaltas.value)
    if (inNota1.value == "" && nota1 >= 0) {
        alert("Informe a primeira nota")
        inNota1.focus()
    }
    else if (inNota2.value == "" && nota2 >= 0) {
        alert("Informe a segunda nota")
        inNota2.focus()
    }
    else if (inFaltas.value == "" && faltas >= 0) {
        alert("Informe a quantidade de faltas")
        inFaltas.focus()
    }
    else {
        // Com so campos preenchidos, verifica-se o aluno.
        
    }
}