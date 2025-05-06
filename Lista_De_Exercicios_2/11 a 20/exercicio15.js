// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.

const prompt = require('prompt-sync')();

let numeros = [];
for (let i = 0; i < 10; i++) {
  numeros.push(parseFloat(prompt(`Digite o número ${i + 1}: `)));
}

console.log('Números pares e sua posições:');
numeros.forEach((num, i) => {
  if (num % 2 === 0) {
    console.log(`Valor: ${num}, posição: ${i}`);
  }
});
