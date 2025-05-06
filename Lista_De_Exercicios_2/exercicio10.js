// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:

// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require('prompt-sync')()

let soma = 0,
  menor = null,
  pares = 0,
  count = 0;
let continuar;

do {
  let num = parseInt(prompt('Digite um número:'));
  soma += num;
  if (menor === null || num < menor) menor = num;
  if (num % 2 === 0) pares++;
  count++;

  continuar = prompt('Deseja continuar? (S/N)').toUpperCase();
} while (continuar === 'S');

let media = soma / count;

console.log(`Soma total: ${soma}`);
console.log(`Menor valor: ${menor}`);
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Quantidade de números pares: ${pares}`);
