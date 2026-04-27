// Referênciando elementos DOM
const inNome = document.getElementById("inNome");
const rbImpar = document.getElementById("rbImpar");
const rbPar = document.getElementById("rbPar");
const outResult = document.getElementById("outResult");
const btJogar = document.getElementById("btJogar");

var acertosConsecutivos = 0;
var errosConsecutivos = 0;
var pontos = 0;
var nome, nomeAnterior;
// Listando eventos de escuta

btJogar.addEventListener("click", verificarPartida);

// estruturando função lógica

function verificarPartida() {
    // Gerar número aleatório
    let extremoBaixo = 1;
    let extremoAlto = 100;
    let impar = rbImpar.checked;
    let par = rbPar.checked;
    // Verificando possíveis erros
    if (inNome.value == "") {
        alert("Informe o nome do jogador.");
        inNome.focus();
    }
    else if (impar == false && par == false) {
        alert("Dê o seu palpite! Impar ou par?");
    }
    else {
        let numeroGerado = Math.floor(Math.random() * (extremoAlto - extremoBaixo + 1) + extremoBaixo);
        let resultado = numeroGerado % 2 == 0 ? "Par" : "Impar";
        let palpite = par ? "Par" : "Impar";

        if (inNome.value != nome) {
            pontos = 0;
            acertosConsecutivos = 0;
            errosConsecutivos = 0;
            nome = inNome.value
        }
        if (resultado == palpite) {
            acertosConsecutivos++;
            acertosConsecutivos % 3 == 0 ? pontos += 6 : pontos++;
            outResult.innerHTML = "O numero sorteado foi " + numeroGerado + ". Parabéns, " + inNome.value + " você acertou." +
                "<br><br> Sua pontuação é de: " + pontos + " pontos | Acertou " + acertosConsecutivos + " vezes seguidas.";
            outResult.style.color = "green";
            errosConsecutivos = 0
        }
        else {
            errosConsecutivos++
            errosConsecutivos % 3 == 0 ? pontos = Math.ceil(pontos / 2) : pontos--;
            pontos <= 0 ? pontos = 0 : "" ;
            outResult.innerHTML = "O numero sorteado foi " + numeroGerado + ". Infelizmente " + inNome.value + ", você errou." +
                "<br><br> Sua pontuação é de: " + pontos + " pontos | Errou " + errosConsecutivos + " vezes seguidas.";
            outResult.style.color = "red";
            acertosConsecutivos = 0;
        }
    }
}