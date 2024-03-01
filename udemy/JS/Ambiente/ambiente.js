const visor = document.querySelector('.visor');
const listaDeNumeros = [];

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('btn-num')) {
        visor.value += el.innerText;
    } else if (el.classList.contains('btn-soma')) {
        operar('somar');
    } else if (el.classList.contains('btn-dim')) {
        operar('diminuir');
    } else if (el.classList.contains('btn-multi')) {
        operar('multiplicar');
    } else if (el.classList.contains('btn-div')) {
        operar('dividir');
    } else if (el.classList.contains('btn-clear')) {
        clear();
    } else if (el.classList.contains('btn-eq')) {
        calcularResultado();
    }
});

function operar(operador) {
    listaDeNumeros.push(Number(visor.value));
    listaDeNumeros.push(operador);
    visor.value = '';
}

function clear() {
    visor.value = '';
    listaDeNumeros.length = 0;
}

function calcularResultado() {
    listaDeNumeros.push(Number(visor.value));
    let resultado = listaDeNumeros[0];

    for (let i = 1; i < listaDeNumeros.length; i += 2) {
        const operador = listaDeNumeros[i];
        const numero = listaDeNumeros[i + 1];

        if (operador === 'somar') {
            resultado += numero;
        } else if (operador === 'diminuir') {
            resultado -= numero;
        } else if (operador === 'multiplicar') {
            resultado *= numero;
        } else if (operador === 'dividir') {
            resultado /= numero;
        }
    }

    visor.value = resultado;
    listaDeNumeros.length = 0;
}