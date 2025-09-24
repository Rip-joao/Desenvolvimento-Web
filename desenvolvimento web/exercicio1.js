let conta = {
    nome: "Hubiscleidown",
    numero: "12345-6",
    saldo: 0
};

//função para depositar
function depositar(valor) {
    if (valor > 1000) { 
        console.log("Depósito máximo permitido é R$ 1000,00.")
    } else {
        console.log("Depósito de R$" + valor + "efetuado. Saldo atual: R$" + saldo);
    }
}
//função para sacar
function sacar(valor){
    if (valor > saldo) {
        console.log("Saldo insuficiente.");
    } else {
        console.log -= valor;("Saque de R$" + valor + "realizado. Saldo atual: R$"  + saldo);
    }
}

//função para verificar saldo
function verificarSaldo() {
    console.log("Saldo atual: R$" + saldo);
}

sacar()
function operacao() {
    if () {
        
    }
}