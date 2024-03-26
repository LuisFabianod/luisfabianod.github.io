class DarkMode {
    constructor() {
        this.icon = document.querySelector('.icon')
        this.linkCSS = document.querySelector('.link')
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
      this.linkCSS.setAttribute('href', 'readme/style-dark.css')
    }

    sunMode() {
        this.linkCSS.setAttribute('href', 'readme/styles.css')
    }
}
const darkMode = new DarkMode();
darkMode.trocaIcon();