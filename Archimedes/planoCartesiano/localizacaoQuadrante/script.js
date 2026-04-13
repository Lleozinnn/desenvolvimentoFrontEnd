// PASSO 1: Referênciar as variáveis
const inAbscissa = document.getElementById("inAbscissa");
const inOrdenada = document.getElementById("inOrdenada");
const btResult = document.getElementById("btResult");
const outResult = document.getElementById("outResult");

// PASSO 2: Definir Função
function calcular () {
    // Variáveis de controle
    var resultado = ""
    var abscissa = inAbscissa.value;
    var ordenada = inOrdenada.value;
    if (abscissa == "" || ordenada == "") {
        alert("Parece qua algum campo não foi preenchido");
    }
    else {
        if (abscissa == 0 && ordenada == 0){
            resultado = "O PONTO INFORMADO ESTÁ NA ORIGEM (CENTRO) DO PLANO CARTESIANO.";
        }
        else if (abscissa != 0 && ordenada == 0){
            resultado = "O ponto informado está sob o eixo X do plano cartesiano.";
        }
        else if (abscissa == 0 && ordenada != 0){
            resultado = "O ponto informado está sob o eixo Y do plano cartesiano.";
        }
        else if (abscissa >= 0 && ordenada >= 0){
            resultado = "O ponto informado, localiza-se no 1° Quadrante do plano cartesiano.";
        }
        else if (abscissa <= 0 && ordenada >= 0){
            resultado = "O ponto informado, localiza-se no 2° Quadrante do plano cartesiano.";
        }
        else if (abscissa <= 0 && ordenada <= 0){
            resultado = "O ponto informado, localiza-se no 3° Quadrante do plano cartesiano.";
        }
        else if (abscissa >= 0 && ordenada <= 0){
            resultado = "O ponto informado, localiza-se no 4° Quadrante do plano cartesiano.";
        }
    }
    outResult.textContent = resultado;
}

// PASSO 3: Associar função à escuta de evento
btResult.addEventListener("click", calcular)