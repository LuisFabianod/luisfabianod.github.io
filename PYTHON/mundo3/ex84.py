lista = []
dado = []
resp = ''
mai = men = 0
while True:
    dado.append(str(input('Qual o seu nome?')))
    dado.append(float(input('Qual o seu peso?')))
    if len(lista) == 0:
        mai = men = dado[1]
    else:
        if dado[1] > mai:
            mai = dado[1]
        if dado[1] < men:
            men = dado[1]
    
    lista.append(dado[:])
    dado.clear()    
    resp = (str(input('Quer continuar?')))
    if resp[0] in  'Nn':
        break
print(f'Ao todo {len(lista)} pessoas foram cadastradas')
for p in lista:
    if p[1] == mai:
        print(f'Maior Peso: {mai}. Peso de {p[0]} ')
for p in lista:
    if p[1] == men:
        print(f'Menor Peso: {men}. Peso de {p[0]} ')
