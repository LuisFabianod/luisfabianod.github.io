const pessoas = [ 
    { nome: 'Luiza', idade: 62},
    { nome:'Maria' , idade: 23},
    { nome: 'Eduarda' , idade: 55},
    { nome: 'Letícia', idade: 19},
    { nome: 'Rosana', idade: 32},
    { nome: 'Wallaca', idade: 47},
]
const pessoasTerminamA = pessoas.filter( (obj) =>  obj.nome.toLowerCase().endsWith('a')
    
)
console.log(pessoasTerminamA)