function meuEscopo() {
    const form = document.querySelector('.form')
    const res = document.querySelector('#res')

    const pessoas = []
    function recebeEventoForm(evento) {
        evento.preventDefault()
        
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

         let objeto = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value

        }
        pessoas.push(objeto)
        objeto = ''
        res.innerHTML += `${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} <br>`

    }

    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo()