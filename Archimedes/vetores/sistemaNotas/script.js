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
btnMaiorNota.addEventListener("click", exibirMaiorNota);
btnRedefinir.addEventListener("click", definirNotaMax);
btnMaioresMedias.addEventListener("click", acimaMedia);
// Funções de cálculo e exibição
let vetNotas = [];
let notaMax = 0;


// Função 1: Cadastrar notas.
function registrar () {
    let nota = Number(inNota.value);
    if (inNota.value == "") {
        alert("Digite uma nota");
        inNota.focus();
    }
    else if (nota > notaMax || nota < 0) {
        alert(`A nota a ser cadastrada deve estar no intervalo entre 0 e ${notaMax}`);
        inNota.focus();
    }
    else {
        vetNotas.push(nota);
        inNota.value = "";
        outSaida.innerHTML = `A nota ${nota} foi cadastrada com sucesso.`;
        inNota.focus();
    }
    switch (vetNotas.length) {
        case 1:
            btnMaiorNota.disabled = false;
            btnExibir.disabled = false;
            break;
        case 2:
            btnMaioresMedias.disabled = false;
            btnMedia.disabled = false;
            break;
    }
}
// Função 2: Calcular média.
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
// Função 3: Exibir notas.
function exibir () {
    if (vetNotas.length == 0) {
        alert(`Não há notas cadastradas ainda. Cadastre um nova nota.`);
        inNota.focus();
    }
    else {
        outSaida.innerHTML = `As notas cadastradas até agora foram: ${vetNotas.join(", ")}`;
    }
}
// Função 4: Exibir notas acima da média.
function exibirMaiorNota () {
    let maior = 0;
    for (let index = 0; index < vetNotas.length; index++) {
        const nota = vetNotas[index];
        nota > maior ? maior = nota : "";
    }
    outSaida.innerHTML = `A maior nota registrada foi ${maior}.`;
}
// Função 5: Preparar sistema para receber notas.
function definirNotaMax () {
    notaMax = Number(inNotaMax.value);
    if (inNotaMax.value == "" || notaMax <= 0) {
        inNota.disabled = true;
        alert("Digite a nota máxima. O valor deste campo deve ser superior a 0.");
        inNotaMax.focus();
    }
    else {
        if (inNotaMax.disabled) {
            btnRedefinir.innerHTML = "Definir Nota Máxima";
            outSaida.innerHTML = "";
            inNota.value = "";
            inNotaMax.disabled = false;
            btnRegistrar.disabled = true;
            inNota.disabled = true;
            btnMaiorNota.disabled = true;
            btnExibir.disabled = true;
            btnMaioresMedias.disabled = true;
            btnMedia.disabled = true;
        }
        else {
            btnRedefinir.innerHTML = "Redefinir Nota Máxima";
            outSaida.innerHTML = "Sistema pronto para receber novas notas.";
            inNotaMax.disabled = true;
            btnRegistrar.disabled = false;
            inNota.disabled = false;
            vetNotas = [];
        }
    }
}
// Função 6: Exibir notas acima da média.
function acimaMedia () {
    let acima = 0;
    for (let index = 0; index < vetNotas.length; index++) {
        if (vetNotas[index] >= (0.6 * notaMax)) {
            acima++;
        }
    }
    outSaida.innerHTML = `Das ${vetNotas.length} notas registradas, ${vetNotas.length - acima} estão abaixo da média e ${acima} estão acima da média.`;
}
