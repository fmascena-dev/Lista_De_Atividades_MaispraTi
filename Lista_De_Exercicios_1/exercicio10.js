// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')();

let numeroRepetido = parseFloat(prompt('Digite um número inteiro: '));
for (let i = 0; i < 10; i++) {
  console.log(numeroRepetido);
}
