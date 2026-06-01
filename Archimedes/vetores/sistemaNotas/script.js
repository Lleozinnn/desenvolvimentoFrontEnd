// Referênciando elementos
const inNota = document.querySelector("#inNota");
const btnRegistrar = document.querySelector("#btnRegistrar");
const btnMedia = document.querySelector("#btnMedia");
const btnExibir = document.querySelector("#btnExibir");
const outSaida = document.querySelector("#outSaida");
// Adicionando evento de escuta
// btnExibir.addEventListener("click", exibir);
// btnMedia.addEventListener("click", media);
btnRegistrar.addEventListener("click", registrar);
// Funções de cálculo e exibição

// Passo 1: Cadastrar notas
let vetNotas = [];
function registrar () {
    let nota = inNota.value;
    if (inNota.value == "") {
        alert("Digite uma nota");
        inNota.focus();
    }
    else {
        vetNotas.push(nota);
        inNota.focus();
    }
}
function media () {
    
}