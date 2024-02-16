var agora = new Date()
var diaSem = agora.getDay()
switch(diaSem){
    case 0:
        ('Domingo')
        break        
    case 1:
        diaSem = ('Segunda')
        break
    case 2:
        diaSem = ('Terça')
        break
    case 3:
        diaSem = ('Quarta')
            break
    case 4:
        diaSem = ('Quinta')
        break
    case 5:
        diaSem = ('Sexta')
        break
    case 6:
        diaSem = ('Sábado')
        break
    default:
        console.log("FUDIDO")
}
console.log(`Hoje é ${diaSem}`)