// cypress.config.js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://web.superfrete.com/', // URL base da aplicação
    viewportWidth: 1366,  // Largura padrão da viewport do navegador
    viewportHeight: 768,  // Altura padrão da viewport do navegador
   // defaultCommandTimeout: 300000,  // Timeout padrão para comandos Cypress (20 segundos)
   // pageLoadTimeout: 70000,  // Timeout para carregamento de páginas (200 segundos)
  },
});
