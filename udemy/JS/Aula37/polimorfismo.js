function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}
Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log('saldo insuficiente')
        return
    }
    this.saldo -= valor
    console.log('saldo após transação:', this.saldo.toFixed(2), 'R$')
}
Conta.prototype.depositar = function (valor) {
    this.saldo += valor
    console.log('saldo após transação:', this.saldo.toFixed(2), 'R$')
}
Conta.prototype.verSaldo = function () {
    console.log(`Ag/c: ${this.agencia} / ${this.conta}`)
    console.log(`Saldo: ${this.saldo.toFixed(2)}R$`)
}

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite

}
ContaCorrente.prototype = Object.create(Conta.prototype)

ContaCorrente.prototype.constructor
    = ContaCorrente

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > this.saldo + this.limite) {
        console.log('saldo insuficiente')
        return
    }
    this.saldo -= valor
    console.log('saldo após transação:', this.saldo.toFixed(2), 'R$')
}
function ContaPoupança(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo )

}
ContaPoupança.prototype = Object.create(Conta.prototype)
ContaPoupança.prototype.constructor = ContaPoupança
const cp = new ContaPoupança(12,33, 0)
const cc = new ContaCorrente(11, 22, 0, 100)
cc.depositar(10)
cc.sacar(110)
cc.sacar(1)
cp.depositar(10)
cp.sacar(110)
cp.sacar(1)



