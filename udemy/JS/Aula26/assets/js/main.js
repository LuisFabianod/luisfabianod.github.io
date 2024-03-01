function relogio() {
    function getTimeFromSeconds(segundos) { // função para fazer os segundos
        const data = new Date(segundos * 1000) // fazendo a variável dos segundos, multiplicado por mil, pois o JS recebe milésimos de segundo
        return data.toLocaleTimeString('pt-br', { // função para retornar o valor em segundos
            hour12: false,
            timeZone: 'UTC' // não levar em conta fuso horário
        })
    }

    const relogio = document.querySelector('.relogio') // uma variável para cada div
    let segundos = 0 // foi declarada no escopo global, então não precisa ser declarada na função, vamos usar só uma vez
    let timer
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++; // isso aqui é um contador de segundos, e a cada segundo vai somar 1 à variável segundos
            relogio.innerHTML = getTimeFromSeconds(segundos);
        }, 1000);

    }
    document.addEventListener('click', function (e) {
        const el = e.target
        if (el.classList.contains('iniciar')) {
            relogio.style.color = 'black'
            clearInterval(timer)
            iniciaRelogio()
        }
        if (el.classList.contains('pausar')) {
            clearInterval(timer)
            relogio.style.color = 'red'
        }
        if (el.classList.contains('zerar')) {
            relogio.style.color = 'black'
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            segundos = 0
        }
    })
}
relogio()