const palavras = ['barriga', 'elefante', 'xamuel', 'vaisefuder']
let palavraEscolhida;
let exibicaoPalavra
let letrasChutadas;
let tentativasRestantes;
let numeroErros;

function iniciarJogo() {
    document.getElementById('btn-reiniciar').style.display = 'none';
    document.getElementById('entrada-letra').disabled = false;

    palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
    console.log(palavraEscolhida)
    exibicaoPalavra = Array(palavraEscolhida.length).fill('_');

    letrasChutadas = [];

    tentativasRestantes = 7;

    numeroErros = 0;

    atualizarExibição();

}
function atualizarExibição() {
    document.getElementById('palavra').innerText = exibicaoPalavra.join(' ');

    document.getElementById('letras-chutadas').innerText = `${letrasChutadas.join(', ')}`

    document.getElementById('mensagem').innerText = '';

    document.getElementById('img-forca').src = `imagens/forca${numeroErros}.png`;

    if (tentativasRestantes === 0) {
        encerrarJogo('VOCÊ MORREU! ');
    }
    else if (!exibicaoPalavra.includes('_')) {
        encerrarJogo('VOCÊ VENCEU! ');
    }
}

function chutarLetra() {
    const entradaLetra = document.getElementById('entrada-letra');
    const letra = entradaLetra.value.toLowerCase()

    if (!letra.match(/[a-zà-ùÇ]/i)) {
        alert('Tente uma letra válida')
        return;
    }
    if (letrasChutadas.includes(letra)) {
        alert('Você já tentou essa letra!')
        return;
    }

    letrasChutadas.push(letra);

    if (palavraEscolhida.includes(letra)){
        for (let i = 0; i < palavraEscolhida.length; i++) {
            if (palavraEscolhida[i] === letra){
                exibicaoPalavra[i] = letra;
            }
        }}else {
                tentativasRestantes--;
                numeroErros++;

            }

            entradaLetra.value = '';

            atualizarExibição();
        

    }

function encerrarJogo(msg) {
    document.getElementById('entrada-letra').disabled = true;

    document.getElementById('mensagem').style.display = 'block';
    
    document.getElementById('mensagem').innerText = msg

    document.getElementById('btn-reiniciar').style.display = 'block'
}

window.load = iniciarJogo();