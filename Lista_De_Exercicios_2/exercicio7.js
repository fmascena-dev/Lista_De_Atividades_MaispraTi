// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort.

const prompt = require('prompt-sync')();

function nomesOrdenadosPorPreco(produtos) {
  return produtos
    .sort((a, b) => a.preco - b.preco)
    .map((produto) => produto.nome);
}

const produtos = [];
const quantidade = parseInt(prompt('Quantos produtos deseja cadastrar? '));

for (let i = 0; i < quantidade; i++) {
    const nome = prompt(`Produto ${i + 1} - nome: `);
    const preco = parseFloat(prompt(`Produto ${i + 1} - preço: `));
  produtos.push({ nome, preco });
}

console.log(`Nomes ordenados por preço: ${nomesOrdenadosPorPreco(produtos)}`);
console.log(produtos);
