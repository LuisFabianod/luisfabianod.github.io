const pessoas = [ 
    { nome: 'Luiz', idade: 62},
    { nome:'Maria' , idade: 23},
    { nome: 'Eduardo' , idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallace', idade: 47},
]
const nomePessoa = pessoas.map((valor) => valor.nome
)
const idades = pessoas.map((valor) =>  ({idade: valor.idade})
)
// console.log(nomePessoa)
const pessoasId = pessoas.map((valor) =>{
    valor.id = geraId()
    return valor
}) 

function geraId(){
    const id = []
    for(let i = 0; i <= 5; i++){
    const num = Math.round(Math.random() * 10)
    id.push(num)
    }
    return id.join('') 
}
console.log(pessoasId)
// Estou afetando o objeto original