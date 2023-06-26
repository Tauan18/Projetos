const bt = document.getElementById('sorteio')
const div = document.getElementById('res')

bt.onclick = () => {

const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const n1 = Number(num1.value)
const n2 = Number(num2.value)
const numero = Math.floor(Math.random(1) * n2 - n1 + 2 )
div.innerHTML = numero

}