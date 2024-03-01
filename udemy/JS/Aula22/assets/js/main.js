/*
const data = new Date();
const diaSemana = data.getDay
const mes = data.getMonth
const res = document.getElementById('res')
function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto
    switch (diaSemana) {
        case 0: diaSemanaTexto = 'Domingo'
            return diaSemanaTexto;
        case 1: diaSemanaTexto = 'Segunda'
            return diaSemanaTexto;
        case 2: diaSemanaTexto = 'Terça'
            return diaSemanaTexto;
        case 3: diaSemanaTexto = 'Quarta'
            return diaSemanaTexto;
        case 4: diaSemanaTexto = 'Quinta'
            return diaSemanaTexto;
        case 5: diaSemanaTexto = 'Sexta'
            return diaSemanaTexto;
        case 6: diaSemanaTexto = 'Sábado'
            return diaSemanaTexto;
        default: diaSemanaTexto = 'BURRO'
    }
}
function getMesTexto(mes) {
    let mesTexto
    switch (mes) {
        case 0: mesTexto = 'janeiro'
            return mesTexto;
        case 1: mesTexto = 'fevereiro'
            return mesTexto;
        case 2: mesTexto = 'março'
            return mesTexto;
        case 3: mesTexto = 'abril'
            return mesTexto;
        case 4: mesTexto = 'maio'
            return mesTexto;
        case 5: mesTexto = 'junho'
            return mesTexto;
        case 6: mesTexto = 'julho'
            return mesTexto;
        case 7: mesTexto = 'agosto'
            return mesTexto;
        case 8: mesTexto = 'setembro'
            return mesTexto;
        case 9: mesTexto = 'outubro'
            return mesTexto;
        case 10: mesTexto = 'novembro'
            return mesTexto;
        case 11: mesTexto = 'dezembro'
            return mesTexto;
        default: mesTexto = 'Deu ruim'

    }
}
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}
function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana)
    const nomeMes = getMesTexto(numeroMes)

    return (
        `${nomeDia},  ${data.getDate()} de ${nomeMes} ` +
        `de ${data.getFullYear()}` +
        ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`
    )
}

res.innerHTML += criaData(data)
*/

const res = document.getElementById('res')
const data = new Date()
resultado.innerHTML += data.toLocaleDateString('pt-br', { dateStyle: 'full', timeStyle: 'short' })


