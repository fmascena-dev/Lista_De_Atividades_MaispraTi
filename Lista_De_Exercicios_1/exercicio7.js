// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

const quantidade_maca = parseFloat(prompt('Quantas maçãs você comprou: '));
const preco = quantidade_maca < 12 ? 0.3 : 0.25;
const total = quantidade_maca * preco;
console.log(`Total da compra é: R$ ${total.toFixed(2)}`);
