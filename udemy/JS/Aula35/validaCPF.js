function validaCPF() {
    return {
        arrayCPF: [],
        CPF: document.querySelector('#validaCPF'),
        res: document.querySelector('.res'),
        botoes: document.querySelector('.botoes'),
        cpfLimpo: '',

        inicia() {
            document.addEventListener('DOMContentLoaded', () => {
                this.CPF.focus()
            })
            document.addEventListener('click', (e) => {
                const el = e.target
                if (el.classList.contains('btn')) {
                    this.validaLength()
                }
            })
        },
        criaBotao() {
            if (!this.botoes.classList.contains('tala')) {
                const reinicia = document.createElement('button')
                reinicia.classList.add('reinicia')
                reinicia.innerText = 'Reinicia'
                reinicia.addEventListener('click', () => {
                    window.location.reload() // Recarrega a página
                })
                this.botoes.appendChild(reinicia)
                this.botoes.classList.add('tala')
            }
        },
        validaLength() {
            this.cpfLimpo = this.CPF.value.replace(/\D+/g, '')
            if (this.cpfLimpo.length !== 11) {
                this.res.innerHTML = 'CPF Inválido'
                this.res.innerHTML += `<br> Recarregue a página para corrigir ou tentar outro`
                this.criaBotao()
                return
            }
            this.funcArrayCPF()
        },
        funcArrayCPF() {
            let arrayCPFLocal = []
            for (let i = 0; i < 10; i++) {
                arrayCPFLocal.push(this.cpfLimpo[i])
            }
            this.arrayCPF = [...arrayCPFLocal]
            arrayCPFLocal.splice(-1, 1)
            this.multiplicaCPF(arrayCPFLocal)

        },
        multiplicaCPF(array) {
            let multiplicador = 0
            let multiplicados = []
            for (let [i, num] of array.entries()) {
                multiplicador = num * (10 - i)
                multiplicados.push(multiplicador)
                multiplicador = 0
            }
            this.somaArray(multiplicados)
        },
        somaArray(multiplicados) {
            const soma = multiplicados.reduce((acumulador, valor) => acumulador + valor, 0)
            this.primeiroDigito(soma)
        },
        primeiroDigito(soma) {
            let primeiroDigito = 11 - (soma % 11)
            if (primeiroDigito > 9) {
                primeiroDigito = 0
            }
            if (primeiroDigito !== parseInt(this.cpfLimpo[9])) {
                this.res.innerHTML = 'CPF Inválido'
                this.res.innerHTML += `<br> Recarregue a página para corrigir ou tentar outro`
                this.criaBotao()
                return
            }
            this.multiplicaCPF1(this.arrayCPF)

        },
        multiplicaCPF1(array) {
            let multiplicador = 0
            let multiplicados = []
            for (let [i, num] of array.entries()) {
                multiplicador = num * (11 - i)
                multiplicados.push(multiplicador)
                multiplicador = 0
            }
            this.somaArray1(multiplicados)
        },
        somaArray1(multiplicados) {
            const soma = multiplicados.reduce((acumulador, valor) => acumulador + valor, 0)
            this.segundoDigito(soma)
        },
        segundoDigito(soma) {
            let segundoDigito = 11 - (soma % 11)
            if (segundoDigito > 9) {
                segundoDigito = 0
            }
            if (segundoDigito !== parseInt(this.cpfLimpo[10])) {
                this.res.innerHTML = 'CPF Inválido'
                this.res.innerHTML += `<br> Recarregue a página para corrigir ou tentar outro`
                this.criaBotao()
                return

            }
            this.res.innerHTML = 'CPF válido!'
            this.res.innerHTML += `<br> Recarregue a página para corrigir ou tentar outro`
            this.criaBotao()
        }
    }
}
const validadorDECPF = validaCPF()
validadorDECPF.inicia()

