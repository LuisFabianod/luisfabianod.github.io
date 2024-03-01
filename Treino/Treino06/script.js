function calculadora() {
    const display = document.querySelector('.display')
    function inicia() {
        capturaClick()
        capturaEnter()
    }
    function capturaEnter() {
        display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                realizaConta()
            }
        })
    }
    function capturaClick() {
        document.addEventListener('click', (e) => {
            const el = e.target
            if (el.classList.contains('btn-num')) {
                escreveDisplay(el.innerText)
            }
            if (el.classList.contains('btn-clear')) {
                apagaDisplay()
            }
            if (el.classList.contains('btn-del')) {
                apagaUm()
            }
            if (el.classList.contains('btn-eq')) {
                realizaConta()
            }
        })
    }
    function escreveDisplay(valor) {
        console.log(valor)
        display.value += valor
    }
    function apagaDisplay() {
        display.value = ''
    }
    function apagaUm() {
        display.value = display.value.slice(0, -1)
    }
    function realizaConta() {
        let conta = display.value

        try {
            conta = eval(conta)
            if (!conta) {
                display.value = ''
                display.value = 'ERROR'
                return
            }
            display.value = String(conta)

        } catch (e) {
            display.value = ''
            display.value = 'ERROR'
            return
        }
    }
    inicia()
}
calculadora()