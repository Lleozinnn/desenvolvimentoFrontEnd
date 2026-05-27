// Referenciando elementos
const inValor = document.getElementById("inValor");
const corpoTabela = document.getElementById("corpoTabela");
const btCalcular = document.getElementById("btCalcular");
const btLimpar = document.querySelector("#btLimpar")

// Adicionando chamada de função
btCalcular.addEventListener("click", calcular);
btLimpar.addEventListener("click", limpar);

// Criando função
function calcular() {
    corpoTabela.innerHTML = "";
    let valor = Number(inValor.value);
    if (valor <= 0) {
        alert("O valor do empréstimo deve ser maior que zero");
        inValor.focus();
    }
    else {
        let porcentagemJuros = 0.05; // Corresponde a 5%
        for (let parcelas = 3; parcelas <= 30; parcelas += 3) {
            let valorDevido, valorParcela, juros;
            juros = valor * porcentagemJuros;
            valorDevido = valor + juros;
            valorParcela = valorDevido / parcelas;
            corpoTabela.innerHTML += `
                <tr>
                    <th>${parcelas} parcelas</th>
                    <th>R$ ${valorDevido.toFixed(2)}</th>
                    <th>${(porcentagemJuros * 100).toFixed(0)} %</th>
                    <th>R$ ${juros.toFixed(2)}</th>
                    <th>R$ ${valorParcela.toFixed(2)}</th>
                <tr/>
            `;
            porcentagemJuros += 0.05;
        }
    }
}

function limpar () {
    inValor.value = ""
    corpoTabela.innerHTML = "";
    inValor.focus();
}