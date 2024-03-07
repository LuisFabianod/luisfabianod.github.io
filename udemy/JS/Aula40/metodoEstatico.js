class ControleRemoto {
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }

    aumentarVolume(){
        if(this.volume >= 100) {
            console.log(`Volume máximo atingido:  100`)
            return
            }
        this.volume += 10
        console.log(`Volume: ${this.volume}`)
    }
    diminuirVolume(){
        if(this.volume <= 0){
            console.log(`Volume mínimo atingido:  0`)
            return
            }
        this.volume -= 10
        console.log(`Volume: ${this.volume}`)
    }
}
const controle = new ControleRemoto
console.log(controle)