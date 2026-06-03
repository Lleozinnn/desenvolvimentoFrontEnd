// Referênciando elementos
const inElementos = document.querySelector("#inElementos");
const btnRegistrar = document.querySelector("#btnGerar");
const outSaida = document.querySelector("#outSaida");
// Adicionando evento de escuta
btnRegistrar.addEventListener("click", gerar);

// Função 1: Gerar array aleatório
function gerar () {
    let elementos = Number(inElementos.value);

    if (inElementos.value == "") {
        alert(`Digite o número de elementos que deve conter no array`);
        inElementos.focus();
    }
    else if ( !Number.isInteger(elementos)) {
        alert(`O número que digitou não é inteiro. Digite um número inteiro`);
        inElementos.focus();
    }
    else if (elementos <= 0 || elementos > 500) {
        alert(`O número de elementos deve estar entre 1 e 500.`);
    }
    else { // Após as verificações, gera-se o vetor.
        let vetor = [];
        let vetorIntervalo = [];
        // Para evitar o excesso de variáveis, armazeno em um array o valor e a posição no vetor principal de numeroa aleatórios
        // logo, os arrays maiore menor possuem a seguinte organização => [numero, posição] (sempre 2 valores).
        let maior = [0,0];
        let menor = [100,0];
        let media = 0;
        for (let index = 0; index !== elementos; index++) {
            // Gera o número aleatório
            let numero = Math.floor((Math.random() * (100 - 0 + 1) +0));
            // insere na posição do referido index do vetor.
            vetor.push(numero);
            // Verificação da posição dos elementos de interesse no vetor
            if (maior[0] < numero) {
                maior[0] = numero;
                maior[1] = index;
            }
            if (menor[0] > numero) {
                menor[0] = numero;
                menor[1] = index;
            }
            if (numero >= 80 && numero <= 100) {
                vetorIntervalo.push(numero);
            }
            media += numero;
        }
        media /= elementos;
        // Com o vetor montado, exibe-o na tela
        outSaida.innerHTML = `
        A média dos numeros do vetor é: ${media.toFixed(1)} <br>
        O <strong>maior número gerado foi o ${maior[0]}</strong> e se encontra na posição <strong>${maior[1]}</strong> do vetor;<br>
        O <strong>menor número gerado foi o ${menor[0]}</strong> e se encontra na posição <strong>${menor[1]}</strong> do vetor;<br><br>
        O vetor gerado foi => [ ${vetor.join(", ")} ]. <br><br>
        ${vetorIntervalo.length == 0 ? `Não há numeros gerados no intervalo entre 80 e 100.` : `Os numeros entre 80 e 100 estão nesse vetor => [${vetorIntervalo.join(", ")}].`}
        `;
    }
}