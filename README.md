# Validando Pesquisa

### Projeto de teste

Cenarios criados esta:

```jsx
/blog_pesquisa
    /Features  
				/Plano de testes // Plano de testes
```

### Pré-requisitos

Antes de iniciar, você precisa ter instalado em sua máquina:

```bash
Node.js (recomendado v14.x)
NPM (recomendado v6.x)
Cypress (para execução dos testes)
```

### Instalação

instalar e configurar o projeto localmente:

```bash
Clone o repositório:
git clone <https://github.com/Rodscaloppe/blog_pesquisa>
cd seu-projeto

Instale as dependências do projeto:
	`npm install`
Execute o projeto (ajuste conforme necessário):
	`npm start`
```

## **Testes**

Como executar os testes automatizados para este sistema:

`npm run test`

## **Estrutura do Projeto**

Aqui está uma visão geral da árvore de diretórios do projeto:

```jsx
/blog_pesquisa
    /cypress             # testes E2E
        /integration     # testes de integração
        /fixtures        # Dados 
        /plugins         # Plugins 
        /support         # Comandos personalizados
    /Features            # Plano de testes
				/Plano de testes
    cypress.config.js    # Configuração do Cypress
    package.json         # Dependências do projeto
    package-lock.json    # Bloqueia as versões das dependência
    README.md            # Documentação do projeto
    .gitignore           # Arquivos e diretórios ignorados
```