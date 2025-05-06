// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.

const prompt = require('prompt-sync')()

let A = parseFloat(prompt("Comprimento do primeiro lado: "))
let B = parseFloat(prompt("Comprimento do segundo lado: "))
let C = parseFloat(prompt("Comprimento do terceiro lado: "))

if (A < B + C && B < A + C && C < A + B) {
    console.log("É possível formar um triângulo!")
} else {
    console.log("Não é possível formar um triângulo!")
}