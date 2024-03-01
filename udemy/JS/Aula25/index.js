const lista = []
function gerarNumero() {
    const n1 = Math.floor(Math.random() * (10 - 1) + 1)
    const n2 = Math.floor(Math.random() * (10 - 1) + 1)
    lista.push(n1)
    lista.push(n2)
}
gerarNumero()
function checarMaior(lista) {
    let maior = lista[0]
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i]
        }
    
    lista.push(maior)
    return maior
}
}
const NumeroMaior = checarMaior(lista)
console.log(`Recebi os valores ${lista[0]} e ${lista[1]}, e o maior deles é ${NumeroMaior}`)
