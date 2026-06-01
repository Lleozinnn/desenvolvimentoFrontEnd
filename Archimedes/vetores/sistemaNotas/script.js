// Referênciando elementos
const inNota = document.querySelector("#inNota");
const btnRegistrar = document.querySelector("#btnRegistrar");
const btnMedia = document.querySelector("#btnMedia");
const btnExibir = document.querySelector("#btnExibir");
const outSaida = document.querySelector("#outSaida");
// Adicionando evento de escuta
btnExibir.addEventListener("click", exibir);
btnMedia.addEventListener("click", media);
btnRegistrar.addEventListener("click", registrar);
// Funções de cálculo e exibição
let vetNotas = [];
// Função 1: Cadastrar notas
function registrar () {
    let nota = Number(inNota.value);
    if (inNota.value == "") {
        alert("Digite uma nota");
        inNota.focus();
    }
    else {
        vetNotas.push(nota);
        inNota.value = "";
        outSaida.innerHTML = `A nota ${nota} foi cadastrada com sucesso.`
        inNota.focus();
    }
}
// Função 2: Calcular média
function media () {
    if (vetNotas.length < 2) {
        alert(`Registre pelo menos 2 notas para calcular a média.`);
        alert(`Você cadastrou ${vetNotas.length} nota(s).`);
        inNota.focus();
    }
    else {
        let mediaNotas = 0;
        for (let index = 0; index < vetNotas.length; index++) {
            mediaNotas += vetNotas[index];
        }
        mediaNotas /= vetNotas.length;
        outSaida.innerHTML = `A média das ${vetNotas.length} notas registradas é ${mediaNotas.toFixed(1)}`;
    }
}
// Função 3: Exibir notas
function exibir () {
    if (vetNotas.length == 0) {
        alert(`Não há notas cadastradas ainda. Cadastre um nova nota.`)
        inNota.focus()
    }
    else {
        outSaida.innerHTML = `As notas cadastradas até agora foram: ${vetNotas.join(", ")}`
    }
}