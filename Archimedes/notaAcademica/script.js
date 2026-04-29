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
}