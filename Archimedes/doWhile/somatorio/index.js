const inX = document.querySelector("#inX");
const inY = document.querySelector("#inY");
const btCalcular = document.querySelector("#btCalcular");
const outResultado = document.querySelector("#outResultado");
// associando evento ao botao

btCalcular.addEventListener("click", calcular);
// Funcao
function calcular() {
    let x = Number(inX.value);
    let y = Number(inY.value);
    if (y >= 0 && inX.value !== "" && inY.value !== "") {
        let somatorio = 0;
        let soma = true;
        while (y >= 0) {
            // Calculo de fatorial (Trecho de código reaproveitado de exercício anterior)
            if (y == 0 || y == 1) {
                fatorial = 1
            }
            else {
                restante = y;
                while (restante !== 1) {
                    if (restante == y) {
                        fatorial = restante * (restante - 1);
                    }
                    else {
                        fatorial *= (restante - 1)
                    }
                    restante--
                }
            }
            // Término do cálculo de fatorial
            let expressao = (x ** y / fatorial); // Expressão comum
            somatorio = soma ? somatorio + expressao : somatorio - expressao;
            y--;
            soma = soma ? false : true; // Mudando a operação para o próximo loop
        }
        outResultado.innerHTML = `O resultado é: ${somatorio.toFixed(2)}`;
    } else {
        alert("Informe um nunero maior ou igual a zero para y");
        inY.focus()
    }
}