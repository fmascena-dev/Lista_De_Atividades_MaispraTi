// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array.

const prompt = require('prompt-sync')();

function palavrasUnicas(str) {
  const palavras = str.split(' ');
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    if (palavras.indexOf(palavras[i]) === palavras.lastIndexOf(palavras[i])) {
      unicas.push(palavras[i]);
    }
  }

  return unicas;
}

// Entrada do usuário
const frase = prompt('Digite a sua frase: ');
const resultado = palavrasUnicas(frase);
console.log('Palavras únicas:', resultado);
