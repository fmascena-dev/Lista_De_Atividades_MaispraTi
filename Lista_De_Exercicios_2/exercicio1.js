const prompt = require('prompt-sync')();

const cigarrosPorDia = parseFloat(prompt('Quantos cigarros você fuma por dia? '));
const anosFumando = parseFloat(prompt('Quantos anos você fumou? '));

let totalDeCigarros = cigarrosPorDia * 365 * anosFumando
let minutosPerdidos = totalDeCigarros * 10
let diasPerdidos = Math.floor(minutosPerdidos / (60 * 24))

console.log(`Você perdeu aproximadamente ${diasPerdidos} dias de vida!`)