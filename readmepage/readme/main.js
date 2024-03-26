class DarkMode {
    constructor() {
        this.icon = document.querySelector('.icon')
        this.main = document.querySelector('#main')
        this.header = document.querySelector('#header')
        this.body = document.querySelector('#body')
        this.a = document.querySelectorAll('.a')
        this.img = document.querySelectorAll('.icondark')
        this.html = document.querySelector('#html')
    }

    trocaIcon() {
        this.icon.addEventListener('click', () => {
            if (this.icon.classList.contains('darkmodeicon')) {
                this.icon.setAttribute('src', 'readme/imagens/brilho-do-sol.png');
                this.icon.classList.remove('darkmodeicon')
                this.icon.classList.add('sunmodeicon')
                this.icon.classList.add('icondark')
                this.darkMode()
            }
            else if (this.icon.classList.contains('sunmodeicon')) {
                this.icon.setAttribute('src', 'readme/imagens/lua.png')
                this.icon.classList.remove('sunmodeicon')
                this.icon.classList.add('darkmodeicon')
                this.sunMode()
            }

        });
    }

    darkMode() {
        this.body.style.color = 'white';
        this.header.style.background = 'rgb(19, 19, 19)';
        this.main.style.background = 'rgb(7, 7, 7)';
        this.html.style.background = 'rgb(7, 7, 7)'
        for (let element of this.a) {
            element.style.color = 'white';
        }
    }

    sunMode() {
        this.body.style.color = 'black'
        this.header.style.background = 'white'
        this.main.style.background = 'rgb(218, 243, 255)'
        this.html.style.background = 'rgb(218, 243, 255)'
        for (let element of this.a) {
            element.style.color = 'black';
        }
    }
}
const darkMode = new DarkMode();
darkMode.trocaIcon();