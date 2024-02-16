function verificar(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')
    if(fano.value.length <= 0  || Number(fano.value)  > ano){
        window.alert('BURRO')
    }else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Sua idade: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade < 10){
                 img.setAttribute('src', 'imagens/bebeh.jpeg')
            }else if(idade < 21){
                img.setAttribute('src', 'imagens/jovemh.jpeg')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/adultoh.jpeg')
            }else{
                img.setAttribute('src', 'imagens/idosoh.jpg')
            }
        }else{
            genero = 'Mulher'
            if(idade > 0 && idade < 10){
                img.setAttribute('src', 'imagens/criancam.jpeg')
            }else if(idade < 21){
                img.setAttribute('src', 'imagens/jovemm.jpeg')
            }else if(idade < 50){
                img.setAttribute('src', 'imagens/adultam.jpeg')
            }else{
                img.setAttribute('src', 'imagens/idosam.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero}
        com ${idade} anos`
        res.appendChild(img)
        
    }
}