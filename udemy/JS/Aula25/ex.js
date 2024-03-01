function FizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz'
    if (!numero % 3 === 0 && !numero % 5 === 0) return numero;
    return numero;

}
console.log(FizzBuzz('a'))
for (let i = 0; i <= 100; i++) {
    const Numero = FizzBuzz(i)
    console.log(i, Numero)
}