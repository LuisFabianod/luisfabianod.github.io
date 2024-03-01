const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')
const estiloBody = getComputedStyle(document.body)
const backGroundBody = estiloBody.backgroundColor


for (let i of ps) {
    i.style.background = backGroundBody
    i.style.color = 'white'
}