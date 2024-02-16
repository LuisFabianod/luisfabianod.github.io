from random import randint
valores = (randint(1,10), randint(1,10), randint(1,10), randint(1,10), randint(1,10))
print('Os valores sorteados foram: ' ,end='')
for n in valores:
    print(f'{n}' ,end=' ')
print(f'O maior valor foi {max(valores)}')
print(f'O menor valor foi {min(valores)}')
