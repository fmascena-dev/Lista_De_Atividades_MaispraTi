const prompt = require('prompt-sync')();

function fatorial(n) {
  if (n < 0) throw new Error('Número não pode ser negativo!');
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

const numero = parseInt(prompt('Digite um número para o fatorial: '));
try {
  console.log(`Fatorial de ${numero}: ${fatorial(numero)}`);
} catch (e) {
  console.error(e.message);
}
