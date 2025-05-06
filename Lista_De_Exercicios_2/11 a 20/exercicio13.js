// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos da sequência de Fibonacci.

const prompt = require('prompt-sync')();

let vetorFibonacci = [1, 1];
for (let i = 2; i < 15; i++) {
  vetorFibonacci[i] = vetorFibonacci[i - 1] + vetorFibonacci[i - 2];
}

console.log('Os 15 primeiros termos da sequência de Fibonacci:');
console.log(vetorFibonacci);
