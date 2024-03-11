class ValidaForm {
    constructor() {
        this.nome = document.querySelector('.nome')
        this.sobrenome = document.querySelector('.sobrenome')
        this.cpf = document.querySelector('.cpf')
        this.usuario = document.querySelector('.usuario')
        this.senha = document.querySelector('.senha')
        this.rsenha = document.querySelector('.rsenha')
        document.addEventListener('click', (e) => {
            let el = e.target
            if (el.classList.contains('btn')) {
                e.preventDefault()
                this.validaUsuario()
            }
        })
    }
    validaUsuario() {
        const regex = /^[a-zA-Z0-9]+$/;
        if (!regex.test(this.usuario.value)) {

            const msgErroUsuarioChar = 'O usuário deve conter apenas números e letras'
            this.escreveErro(msgErroUsuarioChar, 'res-usuario')
        }
        if (this.usuario.value.length + 1 < 3 || this.usuario.value.length + 1 > 12) {

            const msgErroUsuarioLength = 'O usuário deve conter entre 3 e 12 caractéres'
            this.escreveErro(msgErroUsuarioLength, 'res-usuario')
        }
        this.validaSenha()
    }
    validaSenha() {
        if (this.senha.value.length + 1 < 6 || this.senha.value.length + 1 > 12) {

            const msgErroSenha = 'A senha deve conter entre 6 e 12 caractéres'
            this.escreveErro(msgErroSenha, 'res-senha');
        }
        this.validaCpf()
    }
    validaCpf() {
        const validadordeCPF = new ValidaCPF(this.cpf.value)
        const msgErroCPF = validadordeCPF.valida()
        this.escreveErro(msgErroCPF, 'res-cpf')


    }
    escreveErro(msg, res) {
        const p = document.createElement('p')
        p.innerText = msg
        this.res = document.querySelector(`.${res}`)
        this.res.appendChild(p)
    }
}

class ValidaCPF {
    constructor(cpf) {
        cpf = cpf.replace(/\D+/g, '')
        this.cpfLimpo = cpf
    }
    valida() {
        if (this.isSequencia()) return 'O CPF não pode ser uma sequência'
        if (typeof this.cpfLimpo !== 'string') return 'CPF inválido'
        if (this.cpfLimpo.length !== 11) return 'O CPF deve conter 11 números'
        this.geraNovoCpf()
        if (!this.novoCPF === this.cpfLimpo) {
            return 'CPF inválido'
        }
    }
    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
    }
    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = this.geraDigito(cpfSemDigitos)
        const digito2 = this.geraDigito(cpfSemDigitos + digito1)
        this.novoCPF = cpfSemDigitos + digito1 + digito2
    }
    geraDigito(cpfSemDigitos) {
        let total = 0
        let reverso = cpfSemDigitos.length + 1
        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica)
            reverso--
        }
        const digito = 11 - (total % 11)
        return digito <= 9 ? String(digito) : '0'
    }
}

new ValidaForm()