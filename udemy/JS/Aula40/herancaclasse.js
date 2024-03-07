class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }
    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado')
            return
        }
        this.ligado = true
        console.log(this.nome + ' ligado')
    }
    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado')
            return
        }

        this.ligado = false
        console.log(this.nome + ' desligado')
    }
}
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor){
        super(nome)
        this.cor = cor
        this.carregando = false
    }
    carregar() {
        if (this.ligado) {
            console.log(this.nome + ' carregando')
            this.carregando = true
        } else {
            console.log(this.nome + ' precisa estar ligado')
        }
    }
}
const dispositivo = new Smartphone('Iphone', 'Preta')
dispositivo.carregar()
dispositivo.ligar()
dispositivo.carregar()
console.log(dispositivo)