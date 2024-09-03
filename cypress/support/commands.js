// cypress/support/commands.js
Cypress.Commands.add('verificaEPreencheEmailSeNecessario', () => {
  cy.get('body').then(($body) => {
    if ($body.find('#email').length > 0) {
      cy.get('#email').type('yonaradebritopereira@gmail.com');
      cy.contains('button', 'Concluir').click();
    }
  });
});
