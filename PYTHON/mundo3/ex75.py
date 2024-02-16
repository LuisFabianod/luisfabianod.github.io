valores = (int(input('Digite um número')),
           int(input('Digite outro número')),
           int(input('Digite mais um número')),
           int(input('Digite o último número')))
print(f'Os valores digitados foram {valores}')
nove = 0
for n in valores:
    if n == 9:
        nove += 1
print(f'O núemro 9 apareceu {nove} vezes')
tres = 0
for pos, n in enumerate(valores):
    if n == 3:
        tres = pos + 1 
print(f'O número 3 apareceu na posição {tres}')     
pares = ()
print('Os números pares foram: ', end='')
for n in valores:
    if n % 2 == 0:
        print(n,end=' ')
        


        

