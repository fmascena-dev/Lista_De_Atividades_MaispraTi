// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

const prompt = require('prompt-sync')();

let fibonacci1 = 0,
  fibonacci2 = 1;
console.log('Sequência de Fibonacci: ');
for (let i = 0; i < 10; i++) {
  console.log(fibonacci1);
  let temp = fibonacci1 + fibonacci2;
  fibonacci1 = fibonacci2;
  fibonacci2 = temp;
}
