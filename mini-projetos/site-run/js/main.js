class CorridaCarro {
    constructor() {
        this.carroEscolhido = '';
        this.blueCar = document.querySelector('.blue-car');
        this.redCar = document.querySelector('.red-car');
        this.pista = document.querySelector('.pista');
        this.divsemaforo = document.querySelector('.semaforo');
        this.form = document.querySelector('.form')
        this.torcedor = document.querySelector('.torcida')
        this.divtexto = document.querySelector('.texto')
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
                this.criaTorcida(`azul 🔵`)

            }
            if (el.classList.contains('choose-red')) {
                e.preventDefault();
                this.carroEscolhido = 'vermelho';
                this.criaTorcida(`vermelho 🔴`)

            }
            if (el.classList.contains('reinicia')) {
                window.location.reload
            }
        });
    }
    criaTorcida(torcida) {
        let p = document.querySelector('.msgtorcida');
        if (p) {
            p.innerText = `Torcendo para: ${torcida}`
        } else {
            p = document.createElement('p');
            p.classList.add('msgtorcida');
            p.innerText = `Torcendo para: ${torcida}`;
            this.torcedor.appendChild(p);
        }
    }

    iniciarCorrida() {
        this.ligarSemaforo()
        this.desativarTorcida()
        setTimeout(() => {
            this.moveCarros();
        }, 4500);
    }
    desativarTorcida() {
        const botaoTorcidaAzul = document.querySelector('.choose-blue')
        const botaoTorcidaVermelho = document.querySelector('.choose-red')
        botaoTorcidaAzul.disabled = true
        botaoTorcidaVermelho.disabled = true
    }

    ligarSemaforo() {
        const vermelho = document.querySelector('.sem-vermelho')
        const amarelo = document.querySelector('.sem-amarelo')
        const verde = document.querySelector('.sem-verde')
        this.divsemaforo.style.display = 'flex'
        setTimeout(() => {
            vermelho.style.background = 'red'
        }, 1000)
        setTimeout(() => {
            vermelho.style.background = 'rgb(59, 21, 21)'
            amarelo.style.background = 'yellow'
        }, 2000)
        setTimeout(() => {
            amarelo.style.background = 'rgb(85, 85, 23)'
            verde.style.background = 'rgb(61, 245, 51)'
        }, 3500)
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
                    this.torcida('azul')
                }
                if (redCarLeft >= max) {
                    this.finalCorrida('CARRO VERMELHO')
                    this.torcida('vermelho')
                }
                return;
            }
        }, 100);
    }
    rand() {
        return Math.floor(Math.random() * 10) + 1;
    }
    finalCorrida(carro) {
        this.divsemaforo.style.display = 'none'
        this.divtexto.innerText = `${carro} VENCEU 🎉`
        const botaoReinicia = document.createElement('button')
        botaoReinicia.innerText = 'Reiniciar'
        botaoReinicia.classList.add('reinicia')
        this.form.appendChild(botaoReinicia)
    }
    torcida(ganhador) {
        const emoji = "😂"
        if (ganhador === 'azul') {
            if (this.carroEscolhido === 'azul') {
                this.divtexto.innerHTML += `<br> O motorista azul agradeçe sua torcida! 👍`
                return
            }
            if (this.carroEscolhido === 'vermelho') {
                this.divtexto.innerHTML += `<br> o motorista azul riu da sua cara! ${emoji}`
                return
            }
        }
        if (ganhador === 'vermelho') {
            if (this.carroEscolhido === 'azul') {
                this.divtexto.innerHTML += `<br> o motorista vermelho riu da sua cara! ${emoji}`
                return
            }
            if (this.carroEscolhido === 'vermelho') {
                this.divtexto.innerHTML += `<br> O motorista vermelho agradeçe sua torcida! 👍`
                return
            }
        }
    }
}

new CorridaCarro();

