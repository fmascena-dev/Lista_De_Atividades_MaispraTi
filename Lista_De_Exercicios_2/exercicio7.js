// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final, mostre o preço a ser pago de acordo com os dados a seguir:

// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km

// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km

const prompt = require('prompt-sync')();

const tipo = prompt(
  'Qual tipo de carro alugado? Popular ou Luxo? ',
).toLowerCase();
let dias = parseInt(prompt('Quantos dias alugado? '));
let km = parseFloat(prompt('Quantos km foram percorridos? '));

let precoDia = tipo === 'popular' ? 90 : 150;
let precoKm;

if (tipo === 'popular') {
  precoKm = km <= 100 ? km * 0.2 : km * 0.10;
} else {
  precoKm = km <= 200 ? km * 0.3 : km * 0.25;
}

let total = (dias * precoDia) + precoKm;
console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
