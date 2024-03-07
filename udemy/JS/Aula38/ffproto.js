const comer = {
    comer(){
        console.log(`${this.nome} está comendo`)
    }
}
const pessoaPrototype = Object.assign({ 

    falar(){
        console.log(`${this.nome} está falando`)
    },
 } , comer)
function criaPessoa(nome, sobrenome) {
    
    return Object.create(pessoaPrototype, {nome: {value: nome}, 
    sobrenome: {value:sobrenome}
    })

}
const p1 = criaPessoa('Luiz' ,'Otávio')
p1.falar()
p1.comer()


