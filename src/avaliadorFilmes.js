/**
 * Retorna a classificação de um filme de acordo com sua média.
 * @param {number} media
 * @returns {string}
 */
function classificarFilme(media) {
  if (media >= 4) return 'Filme recomendado';
  if (media >= 3) return 'Filme razoável';
  return 'Filme ruim';
}

/**
 * Calcula a quantidade de votos, a média e a classificação de um filme.
 * @param {{nome: string, avaliacoes: number[]}} filme
 * @returns {{nome: string, quantidadeVotos: number, media: number, classificacao: string}}
 */
function avaliarFilme(filme) {
  const quantidadeVotos = filme.avaliacoes.length;

  if (quantidadeVotos === 0) {
    throw new Error('O filme precisa ter ao menos uma avaliação.');
  }

  const somaNotas = filme.avaliacoes.reduce((soma, nota) => soma + nota, 0);
  const media = somaNotas / quantidadeVotos;

  return {
    nome: filme.nome,
    quantidadeVotos,
    media,
    classificacao: classificarFilme(media)
  };
}

/** Recebe um vetor de filmes e devolve um vetor com seus resultados. */
function avaliarFilmes(filmes) {
  return filmes.map(avaliarFilme);
}

module.exports = { classificarFilme, avaliarFilme, avaliarFilmes };
