//! 9. Conversão Entre Formatos

// * Escreva duas funções:
// * paresParaObjeto(pares) recebe um array de pares [ [chave, valor], ... ] e retorna o objeto equivalente.
// * objetoParaPares(obj) faz o inverso, retornando um array de pares.

const prompt = require('prompt-sync')();

function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(objeto) {
  return Object.entries(objeto);
}

const escolha = prompt(
  'Escolha a conversão: (1) para pares para objeto ou (2) para objeto para pares: ',
);

if (escolha === '1') {
    const n = parseInt(prompt('Quantos pares deseja inserir? '));
    const pares = [];
  
    for (let i = 0; i < n; i++) {
      const chave = prompt(`Chave ${i + 1}: `);
      const valor = prompt(`Valor ${i + 1}: `);
      pares.push([chave, valor]);
    }
  
    const resultado = paresParaObjeto(pares);
    console.log('Objeto resultante:', resultado); // ou JSON.stringify(resultado)
  } else if (escolha === '2') {
  const objeto = {};
  const n = parseInt(prompt('Quantas propriedades deseja inserir? '));

  for (let i = 0; i < n; i++) {
    const chave = prompt(`Chave ${i + 1}: `);
    const valor = prompt(`Valor ${i + 1}: `);
    obj[chave] = valor;
  }

  console.log('Array de pares:', objetoParaPares(objeto));
} else {
  console.log('Opção inválida!');
}
