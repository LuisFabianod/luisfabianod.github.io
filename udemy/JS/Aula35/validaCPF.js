function validaCPF() {
    return {
        arrayCPF: [],
        CPF: document.querySelector('#validaCPF'),
        res: document.querySelector('.res'),

        inicia() {
            document.addEventListener('click', (e) => {
                const el = e.target
                if (el.classList.contains('btn')) {
                    this.validaLength()
                }
            })
        },
        validaLength() {
            if (this.CPF.value.length !== 11) {
                this.res.innerHTML = 'CPF Inválido'
                this.res.innerHTML += `<br> Recarregue a página para corrigir ou tentar outro`
                return
            }
            this.funcArrayCPF()
        },
        funcArrayCPF() {
            let arrayCPFLocal = []
            for (let i = 0; i < 10; i++) {
                arrayCPFLocal.push(this.CPF.value[i])
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
            if (primeiroDigito !== parseInt(this.CPF.value[9])) {
                this.res.innerHTML = 'CPF Inválido'
                this.res.innerHTML += `<br> Recarregue a página para corrigir ou tentar outro`
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
            if (segundoDigito !== parseInt(this.CPF.value[10])) {
                this.res.innerHTML = 'CPF Inválido'
                this.res.innerHTML += `<br> Recarregue a página para corrigir ou tentar outro`
                return

            }
            this.res.innerHTML = 'CPF válido!'
            this.res.innerHTML += `<br> Recarregue a página para corrigir ou tentar outro`
        }
    }
}
const validadorDECPF = validaCPF()
validadorDECPF.inicia()

