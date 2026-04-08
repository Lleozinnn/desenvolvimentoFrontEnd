// Referenciando partes dinãmicas do documento
const inPrice = document.getElementById("inPrice");
const inQuantity = document.getElementById("inQuantity");
const outFinallyValue = document.getElementById("outFinallyValue");
const btRegistry = document.getElementById("btRegistry");
const btReset = document.getElementById("btReset");
// Definindo evento de escuta
btRegistry.addEventListener("click", calcular);
btReset.addEventListener("click", redefinir);
// Definindo variáveis de controle
var totalValue = 0;
inPrice.focus();

// Construindo Função para cálculo do valor final total
function calcular () {
    var valor = Number(inQuantity.value) * Number(inPrice.value);
    totalValue += valor;
    outFinallyValue.textContent = `O valor registrado até agora é: R$ ${totalValue.toFixed(2)}.`;
    inPrice.value = "";
    inQuantity.value = "";
    inPrice.focus();
};
function redefinir() {
    console.log("Redefinindo...")
    totalValue = 0;
    outFinallyValue.textContent = `Inicie os registros preenchendo os campos acima.`
    inPrice.focus();
}
// Verificar AVA, Aplicar if/else nas funções conforme explicado pelo professor.
