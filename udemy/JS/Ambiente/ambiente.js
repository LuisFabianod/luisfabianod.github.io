function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * percentual / 100)
}
Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - ( this.preco * percentual / 100)
}
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor

}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

function Caneca(nome, preco, material){
    Produto.call(this, nome, preco)
    this.material = material
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const caneca = new Caneca ('Caneca', 15, 'Porcelana')

console.log(camiseta)
console.log(caneca)