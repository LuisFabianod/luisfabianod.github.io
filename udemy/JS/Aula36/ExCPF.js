function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        get: function(){
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}



const cpf = new ValidaCPF('705.484.450-52')
cpf.valida()