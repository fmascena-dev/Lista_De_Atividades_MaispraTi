// 6. Memoization
// Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações.

/**
 *
 * @param {function} fn - A função a ser memorizada.
 * @returns {function} - A nova função "memorizada".
 */

function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log(`(Memoized) Retornando do cache para a chave: ${key}`);
      return cache[key];
    } else {
      console.log(
        `(Calculando) Executando a função original para a chave: ${key}`,
      );
      const resultado = fn.apply(this, args);

      cache[key] = resultado;
      return resultado;
    }
  };
}

//Exemplo de uso: Simulando um pequeno atraso

function Calculo(value) {
  const inicio = Date.now();
  while (Date.now() - inicio < 100) {}
  console.log(`Calculando ${value}...`);
  return value * 2;
}

const memoizedCalculo = memoize(Calculo);

console.log('\nPrimeira chamada para o:');
console.time('primeira chamada 10');
console.log(`Resultado para 10: ${memoizedCalculo(10)}`);
console.timeEnd('primeira chamada 10');

console.log('\nPrimeira chamada para o cache:');
console.time('segunda chamada 10 (cache)');
console.log(`Resultado para 10: ${memoizedCalculo(10)}`);
console.timeEnd('segunda chamada 10 (cache)');

console.log('\nPrimeira chamada para o:');
console.time('primeira chamada 20');
console.log(`Resultado para 20: ${memoizedCalculo(20)}`);
console.timeEnd('primeira chamada 20');

console.log('\nPrimeira chamada para o 20:');
console.time('segunda chamada 20 (cache)');
console.log(`Resultado para 20: ${memoizedCalculo(20)}`);
console.timeEnd('segunda chamada 20 (cache)');
