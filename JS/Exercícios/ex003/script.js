function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim') 
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    res.innerHTML = ''
    if(passo.value.length == 0 ){
        window.alert('BURRO')
    }
    if(Number(fim.value) > Number(inicio.value)){
        for(var c = Number(inicio.value); c <= Number(fim.value); c += Number(passo.value)){
            res.innerHTML += `${c} => `
        }
    }else if(Number(fim.value) < Number(inicio.value)){
        for(var c = Number(inicio.value); c >= Number(fim.value); c -= Number(passo.value)){
            res.innerHTML += `${c} => `
        }
    }
    res.innerHTML += `FIM`

}


