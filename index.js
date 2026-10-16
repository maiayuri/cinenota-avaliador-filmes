const { avaliarFilmes } = require('./src/avaliadorFilmes');

const filmes = [
  { nome: 'Minha mãe é uma peça', avaliacoes: [5, 4, 4, 4, 5] },
  { nome: 'Saneamento Básico', avaliacoes: [3, 4, 2, 3, 4] },
  { nome: 'Se eu fosse você', avaliacoes: [1, 2, 3] }
];

const resultados = avaliarFilmes(filmes);

console.log('\n========================================');
console.log('       CINENOTA | AVALIADOR DE FILMES');
console.log('========================================');

resultados.forEach((filme, indice) => {
  console.log(`\n${indice + 1}. ${filme.nome}`);
  console.log(`   Pessoas que votaram: ${filme.quantidadeVotos}`);
  console.log(`   Média das notas: ${filme.media.toFixed(2).replace('.', ',')}`);
  console.log(`   Resultado: ${filme.classificacao}`);
});

console.log('\n========================================\n');
