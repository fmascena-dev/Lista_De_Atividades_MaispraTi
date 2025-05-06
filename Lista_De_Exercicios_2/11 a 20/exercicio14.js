// 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.

const prompt = require('prompt-sync')();

let nomes = [];
for (let i = 0; i < 7; i++) {
  nomes.push(prompt(`Digite o nome da pessoa ${i + 1}: `));
}

console.log('Nomes na ordem inversa:');
console.log(nomes.reverse());
