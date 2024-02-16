function carregar(){
    var txt = document.getElementById('txt')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours
    txt.innerHTML = `Agora são ${hora} horas`
    if(hora < 12){
        img.src = 'imagens/manha.jpg'
    }else if(hora < 18){
        img.src = 'imagens/tarde.jpg'
    }else if(hora < 23)
        img.src = 'imagens/noite.jpg'
}