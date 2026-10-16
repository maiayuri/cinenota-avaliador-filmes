# CineNota — Avaliador de Filmes

Projeto desenvolvido por **Yuri Raphael Maia** para o **Exercício 5 — Lógica e Programação com Vetores**, utilizando JavaScript e Node.js.

## Objetivo

Receber um vetor de filmes com notas atribuídas por usuários e informar, para cada filme:

1. Quantas pessoas votaram;
2. Qual é a média das notas;
3. Qual é a classificação correspondente à média.

## Regras de negócio

| Média | Resultado |
|---|---|
| Maior ou igual a 4 | Filme recomendado |
| Maior ou igual a 3 e menor que 4 | Filme razoável |
| Menor que 3 | Filme ruim |

## Dados utilizados

```javascript
[
  { nome: 'Minha mãe é uma peça', avaliacoes: [5, 4, 4, 4, 5] },
  { nome: 'Saneamento Básico', avaliacoes: [3, 4, 2, 3, 4] },
  { nome: 'Se eu fosse você', avaliacoes: [1, 2, 3] }
]
```

A propriedade `avaliacoes` é escrita sem acento no código e corresponde às avaliações do enunciado.

## Resultado esperado

| Filme | Votos | Média | Classificação |
|---|---:|---:|---|
| Minha mãe é uma peça | 5 | 4,40 | Filme recomendado |
| Saneamento Básico | 5 | 3,20 | Filme razoável |
| Se eu fosse você | 3 | 2,00 | Filme ruim |

## Estrutura do projeto

```text
cinenota-avaliador-filmes/
├── src/
│   └── avaliadorFilmes.js
├── test/
│   └── avaliadorFilmes.test.js
├── index.js
├── package.json
├── .gitignore
└── README.md
```

## Pré-requisitos

- Node.js e npm instalados;
- VS Code (recomendado).

## Como executar

Clone o repositório e execute na pasta do projeto:

```bash
git clone https://github.com/maiayuri/cinenota-avaliador-filmes.git
cd cinenota-avaliador-filmes
npm install
npm start
```

Para executar os testes automatizados:

```bash
npm test
```

## Testes automatizados

O projeto utiliza **Mocha** (organização e execução) e **Chai** (asserções). São **9 casos de teste** cobrindo:

- Quantidade de votos e média dos três filmes;
- Classificações nos limites exatos 3 e 4;
- Classificações para médias 2,99 e 3,5;
- Processamento de um vetor com três filmes;
- Tratamento de filme sem avaliações, evitando divisão por zero.

## Conceitos aplicados

- Vetores (arrays) e objetos;
- Funções e retorno de valores;
- `reduce()` para somar notas;
- `map()` para processar filmes;
- Condicionais `if`;
- Testes automatizados e valores de fronteira;
- Git e GitHub para versionamento.

## Autor

Yuri Raphael Maia
