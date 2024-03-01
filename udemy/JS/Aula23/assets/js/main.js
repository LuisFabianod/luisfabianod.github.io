const pessoa = [{
    nome: 'Luis',
    idade: 34,
    genero: 'masculino'
}]
const { nome: nome1 = 'otavio' , idade, genero} = pessoa
console.log(nome1)
