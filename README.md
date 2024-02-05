# Verificação da funcionalidade de pesquisa do blog

### Projeto de teste

Foi criado um plano de testes estruturado para verificar a funcionalidade de pesquisa do [blog](https://blogdoagi.com.br/).

Inclui cenários detalhados focados em diferentes aspectos da pesquisa, como validade dos resultados, tratamento de termos inexistentes, manipulação de caracteres especiais, sensibilidade a maiúsculas e minúsculas, e a capacidade de processar múltiplas palavras-chaves.

Cenarios criados esta:

```jsx
blog_pesquisa/
│
├── Features/
      └── Plano de testes // Plano de testes
```

Cada cenário é acompanhado de um objetivo, passos específicos para a execução, e os resultados esperados.

### Pré-requisitos

Antes de iniciar, você precisa ter instalado em sua máquina:

`Node.js (recomendado v14.x)`

`NPM (recomendado v6.x)`

`Cypress (para execução dos testes)`

### Instalação

instalar e configurar o projeto localmente:

Clone o repositório:

```sh
git clone https://github.com/Rodscaloppe/blog_pesquisa
```

```sh
cd blog_pesquisa
```

Instale as dependências do projeto:

```sh
npm install
```

Execute o projeto (ajuste conforme necessário):

```sh
npm start
```

---

## **Testes**

Como executar os testes automatizados para este sistema:

```sh
npm run test
```

> para melhor visualização
>
> ```sh
> npx cypress open
> ```

## **Estrutura do Projeto**

Aqui está uma visão geral da árvore de diretórios do projeto:

```jsx
blog_pesquisa/
│
├── cypress/        // testes E2E
│   ├── e2e/
│   │    └── blog_pesquisa.cy.js    // testes de integração
│   ├── fixtures   // Dados
│   ├── plugins   // Plugins
│   ├── support      // Comandos personalizados
│   └──integration
│          └──blog_pesquisa.cy.js  // Apenas para facilicar a Build
├── Features/
│    └── Plano de testes.md      // Cenarios de testes
│
├── cypress.config.js      // Configuração do Cypress
│
├── package.json      // Dependências do projeto
│
├── package-lock.json    // dependência
│
├── README.md            // Documentação do projeto
│
└── .gitignore           // Arquivos e diretórios ignorados

```
