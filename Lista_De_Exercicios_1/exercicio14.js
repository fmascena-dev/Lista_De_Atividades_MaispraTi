// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require('prompt-sync')();

let n = parseFloat(prompt("Digite um número para calcular o fatorial: "))
let fatorial = 1
for (let i = 1; i <= n; i++) {
    fatorial *= i
}

console.log(`Fatorial de ${n} é ${fatorial}`)