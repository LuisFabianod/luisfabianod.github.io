function tabuada(){
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    var c = 1
    var r = 0
    var res = document.getElementById('res')
    var n = Number(num.value)
    if(n == 0){
        window.alert('BURRO')
    }
    tab.innerHTML = ''
    while( c <= 10){    
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n * c}`
        item.value = `v${c}`
        c++
        tab.appendChild(item)
    }
}