describe('Blog do Agi Search Functionality', () => {

  beforeEach(() => {
    cy.visit('https://blogdoagi.com.br/'); 
  });

  it('Deve retornar resultados de pesquisa relevantes para um termo de pesquisa válido', () => {
    cy.get('#search-open').click(); 
    cy.get('.desktop-search .search-field').type('tecnologia{enter}'); 
    cy.get('.archive-title').should('have.length.at.least', 1); 
  });

  it('Deve mostrar uma mensagem sem resultados para um termo de pesquisa que não existe', () => {
    cy.get('#search-open').click();
    cy.get('.desktop-search .search-field').type('xyzabc123{enter}');
    cy.contains('Nenhum resultado').should('be.visible'); 
  });

  it('Lida com caracteres especiais em entradas de pesquisa', () => {
    cy.get('#search-open').click();
    cy.get('.desktop-search .search-field').type('@#$%{enter}');
    cy.contains('Nenhum resultado').should('be.visible'); 
  });

it('Resultados relevantes são retornados para pesquisas com múltiplas palavras-chave', () => {
  cy.get('#search-open').click(); 
  cy.get('.desktop-search .search-field').type('cartão inss{enter}');
  cy.get('.content-wrap').each(($el) => {
    cy.wrap($el).invoke('text').then((text) => {
    // Valida a procura do texto "cartao" da forma visivel a maiúsculas/minúsculas
      expect(text.toLowerCase()).to.match(/cartão/i);
    });
    // Valida a procura do texto "INSS" da forma visivel a maiúsculas/minúsculas
    cy.wrap($el).invoke('text').then((text) => {
      expect(text.toLowerCase()).to.match(/inss/i);
    });
  });
});

  it('A pesquisa não é sensível ao caso', () => {
    cy.get('#search-open').click();
    cy.get('.desktop-search .search-field').type('Tecnologia{enter}');
    cy.get('.archive-title').should('have.length.at.least', 1); 
  });
});



