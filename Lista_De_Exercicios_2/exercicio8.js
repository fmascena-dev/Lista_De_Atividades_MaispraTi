// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

const prompt = require('prompt-sync')();

function agruparPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
  }, {});
}

const vendas = [];
const n = parseInt(prompt('Quantas vendas deseja cadastrar? '));

for (let i = 0; i < n; i++) {
  const cliente = prompt(`Cliente da venda ${i + 1}: `);
  const total = parseFloat(prompt(`Total da venda ${i + 1}: `));
  vendas.push({ cliente, total });
}

console.log(vendas);
console.log('=========== SOMA DAS VENDAS ===========');
console.log('Totais por cliente: ', agruparPorCliente(vendas));
console.log('=======================================')
