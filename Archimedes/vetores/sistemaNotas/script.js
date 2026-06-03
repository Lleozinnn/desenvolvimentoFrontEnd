// Referênciando elementos
const inNota = document.querySelector("#inNota");
const btnRegistrar = document.querySelector("#btnRegistrar");
const btnMedia = document.querySelector("#btnMedia");
const inNotaMax = document.querySelector("#inNotaMax");
const btnRedefinir = document.querySelector("#btnRedefinir");
const btnMaiorNota = document.querySelector("#btnMaiorNota");
const btnMaioresMedias = document.querySelector("#btnMaioresMedias");
const btnExibir = document.querySelector("#btnExibir");
const outSaida = document.querySelector("#outSaida");
// Adicionando evento de escuta
btnExibir.addEventListener("click", exibir);
btnMedia.addEventListener("click", media);
btnRegistrar.addEventListener("click", registrar);
btnMaiorNota.addEventListener("click", exibirMaiorNota)
inNotaMax.addEventListener("focusout", definirNotaMax)
inNotaMax.addEventListener("click", redefinirNotaMax)
// Funções de cálculo e exibição
let vetNotas = [];
let notaMax = 0;
inNota.disabled = true
// Função 1: Cadastrar notas
function registrar () {
    let nota = Number(inNota.value);
    if (inNota.value == "") {
        alert("Digite uma nota");
        inNota.focus();
    }
    else if (nota > notaMax || nota < 0) {
        alert(`A nota a ser cadastrada deve estar no intervalo entre 0 e ${notaMax}`)
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
// Função 4: Exibir maior nota
function exibirMaiorNota () {
    let maior = 0;
    for (let index = 0; index < vetNotas.length; index++) {
        const nota = vetNotas[index];
        nota > maior ? maior = nota : "";
    }
    outSaida.innerHTML = `A maior nota registrada foi ${maior}.`;
}
// Função 4: Exibir maior nota
function definirNotaMax () {
    let notaMax = Number(inNotaMax.value)
    if (inNotaMax.value == "" || notaMax <= 0) {
        inNota.disabled = true;
        alert("Para registrar notas, defina anota máxima maior que zero.");
    }
    else {
        notaMax = inNotaMax.value;
        inNota.disabled = false;
        inNotaMax.disabled = true;
        vetNotas = [];
    }
}
// Função 5: Redefinir nota
function redefinirNotaMax () {
    if (inNotaMax.disabled == true) {
        inNotaMax.disabled = false;
        inNota.disabled = true;
    }
    else {
        definirNotaMax()
        // Rever essa parte.
    }
}
