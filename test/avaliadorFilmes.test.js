const { expect } = require('chai');
const { avaliarFilme, avaliarFilmes, classificarFilme } = require('../src/avaliadorFilmes');

describe('CineNota - Exercício 5', () => {
  describe('Quantidade de votos e cálculo da média', () => {
    it('conta 5 votos e calcula média 4,4 para Minha mãe é uma peça', () => {
      const resultado = avaliarFilme({ nome: 'Minha mãe é uma peça', avaliacoes: [5, 4, 4, 4, 5] });
      expect(resultado.quantidadeVotos).to.equal(5);
      expect(resultado.media).to.equal(4.4);
    });

    it('conta 5 votos e calcula média 3,2 para Saneamento Básico', () => {
      const resultado = avaliarFilme({ nome: 'Saneamento Básico', avaliacoes: [3, 4, 2, 3, 4] });
      expect(resultado.quantidadeVotos).to.equal(5);
      expect(resultado.media).to.equal(3.2);
    });

    it('conta 3 votos e calcula média 2 para Se eu fosse você', () => {
      const resultado = avaliarFilme({ nome: 'Se eu fosse você', avaliacoes: [1, 2, 3] });
      expect(resultado.quantidadeVotos).to.equal(3);
      expect(resultado.media).to.equal(2);
    });
  });

  describe('Classificação conforme regras de negócio', () => {
    it('classifica média 4 como Filme recomendado (limite inferior)', () => {
      expect(classificarFilme(4)).to.equal('Filme recomendado');
    });

    it('classifica média 3 como Filme razoável (limite inferior)', () => {
      expect(classificarFilme(3)).to.equal('Filme razoável');
    });

    it('classifica média abaixo de 3 como Filme ruim', () => {
      expect(classificarFilme(2.99)).to.equal('Filme ruim');
    });

    it('classifica média entre 3 e 4 como Filme razoável', () => {
      expect(classificarFilme(3.5)).to.equal('Filme razoável');
    });
  });

  describe('Processamento do vetor', () => {
    it('devolve um resultado para cada filme do vetor', () => {
      const resultados = avaliarFilmes([
        { nome: 'Filme A', avaliacoes: [5] },
        { nome: 'Filme B', avaliacoes: [3] },
        { nome: 'Filme C', avaliacoes: [1] }
      ]);
      expect(resultados).to.have.lengthOf(3);
      expect(resultados.map(item => item.classificacao)).to.deep.equal([
        'Filme recomendado', 'Filme razoável', 'Filme ruim'
      ]);
    });

    it('rejeita um filme sem avaliações para evitar divisão por zero', () => {
      expect(() => avaliarFilme({ nome: 'Sem votos', avaliacoes: [] }))
        .to.throw('O filme precisa ter ao menos uma avaliação.');
    });
  });
});
