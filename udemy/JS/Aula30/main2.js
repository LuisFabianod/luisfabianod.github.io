function* geradora3() {
    yield 0
    yield 1
    yield 2
}
function* geradora4() {
    yield* geradora3()
    yield 3

}
const g4 = geradora4()
console.log(g4.next().value)
console.log(g4.next().value)
console.log(g4.next().value)
console.log(g4.next().value)