maior = 0
menor = 0 
posma = 1
posme = 1
valores = []
for c in range(0,5):
    valor = int(input('Digite um valor:'))
    valores.append(valor)
for pos, v in enumerate(valores):
    if pos == 0:
        maior = v
        posma += pos
    else:
        if v > maior:
            maior = v
            posma += pos
for pos, v in enumerate(valores):
    if pos == 0:
        menor = v
        posme += pos
    else:
        if v < menor:
            menor = v           
            posme += pos
print(f'O maior valor foi {maior} na posição {posma}')
print(f'O menor valor foi {menor} na posição {posme}')