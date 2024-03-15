class CorridaCarro {
    constructor() {
        this.carroEscolhido = '';
        this.blueCar = document.querySelector('.blue-car');
        this.redCar = document.querySelector('.red-car');
        this.pista = document.querySelector('.pista');
        this.divcontagem = document.querySelector('.contagem');
        this.form = document.querySelector('.form')
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('start')) {
                e.preventDefault();
                this.iniciarCorrida();
                el.disabled = true;
            }
            if (el.classList.contains('choose-blue')) {
                e.preventDefault();
                this.carroEscolhido = 'azul';
            }
            if (el.classList.contains('choose-red')) {
                e.preventDefault();
                this.carroEscolhido = 'vermelho';
            }
            if (el.classList.contains('reinicia')) {
                window.location.reload
            }
        });
    }

    rand() {
        return Math.floor(Math.random() * 10) + 1;
    }

    iniciarCorrida() {
        this.criaP();
        setTimeout(() => {
            this.moveCarros();
        }, 4500);
    }

    criaP() {
        this.contagem(3);
    }

    contagem(segundos) {
        let i = segundos;
        const intervalo = setInterval(() => {
            if (i <= 0) {
                clearInterval(intervalo);
                this.divcontagem.innerHTML = 'COMEÇA';
                return;
            }
            this.divcontagem.innerHTML = `${i}`;
            i--;
        }, 1000);
    }

    moveCarros() {
        const max = this.pista.offsetWidth - this.blueCar.offsetWidth;
        const intervalo = setInterval(() => {
            const blueCarLeft = parseInt(getComputedStyle(this.blueCar).marginLeft);
            const redCarLeft = parseInt(getComputedStyle(this.redCar).marginLeft);
            if (blueCarLeft < max && redCarLeft < max) {
                this.blueCar.style.marginLeft = `${blueCarLeft + this.rand()}px`;
                this.redCar.style.marginLeft = `${redCarLeft + this.rand()}px`;
            } else {
                clearInterval(intervalo);
                if (blueCarLeft >= max) {
                    this.finalCorrida('CARRO AZUL')
                }
                if (redCarLeft >= max) {
                    this.finalCorrida('CARRO VERMELHO')
                }
                return;
            }
        }, 100);
    }
    finalCorrida(carro) {
        this.divcontagem.innerText = `${carro} VENCEU`
        const botaoReinicia = document.createElement('button')
        botaoReinicia.innerText = 'Reiniciar'
        botaoReinicia.classList.add('reinicia')
        this.form.appendChild(botaoReinicia)
    }
}

new CorridaCarro();

