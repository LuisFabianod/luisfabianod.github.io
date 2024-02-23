function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}
const pessoa1 = criaPessoa('Luis', 'Fabiano', 17)
console.log(pessoa1.nome)