const nome = prompt('Digite seu nome completo:')
document.body.innerHTML += `Olá ${nome} <br>`
document.body.innerHTML += `Seu nome tem ${len(nome)} letras <br>`
document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]}<br>`
document.body.innerHTML += `O primeiro índice da letra a no seu nome é ${nome.indexOf('a')} <br>`
document.body.innerHTML += `As últimas 3 letras do seu nome são ${nome.slice(-3)} <br>` 
