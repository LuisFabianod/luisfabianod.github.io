class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`${this.nome} está falando`)
    }
}

const p1 = new Pessoa('Luiz', 'Miranda')
const p2 = new Pessoa('Fernando', 'Pessoa')
console.log(p1)
console.log(p2)
