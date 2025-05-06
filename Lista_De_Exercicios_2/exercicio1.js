// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')();

const cigarrosPorDia = parseFloat(prompt('Quantos cigarros você fuma por dia? '));
const anosFumando = parseFloat(prompt('Quantos anos você fumou? '));

let totalDeCigarros = cigarrosPorDia * 365 * anosFumando
let minutosPerdidos = totalDeCigarros * 10
let diasPerdidos = Math.floor(minutosPerdidos / (60 * 24))

console.log(`Você perdeu aproximadamente ${diasPerdidos} dias de vida!`)