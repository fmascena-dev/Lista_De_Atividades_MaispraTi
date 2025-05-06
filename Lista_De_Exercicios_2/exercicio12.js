// 12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

const prompt = require('prompt-sync')();

let fibonacci = [1, 1];
while (fibonacci.length < 10) {
  fibonacci.push(
    fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2],
  );
}

console.log('Os 10 primeiros termos da sequência de Fibonacci: ');
console.log(fibonacci.join(', '));
