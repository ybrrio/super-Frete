class CalculoFretePage {
  visit() {
    // Visita a página inicial 
    cy.visit('/');
  }

  limparCookiesEStorage() {
    cy.clearCookies();
    cy.clearLocalStorage();
  }

  selecionarPeso(peso) {
    // Garante que o campo select está visível antes de interagir
    cy.get('#weight').should('be.visible').click();
    cy.contains(peso).click();
  }

  inserirDimensoes(comprimento, largura, altura) {
    // Insere as dimensões do pacote, garantindo que cada campo esteja visível e habilitado
    cy.get('#packageDepth').should('be.visible').and('be.enabled').clear().type(comprimento);
    cy.get('#packageWidth').should('be.visible').and('be.enabled').clear().type(largura);
    cy.get('#packageHeight').should('be.visible').and('be.enabled').clear().type(altura);
  }

  inserirCepOrigemDestino(cepOrigem, cepDestino) {
    // Insere os CEPs de origem e destino, garantindo que cada campo esteja visível e habilitado
    cy.get('#originPostcode').should('be.visible').and('be.enabled').clear().type(cepOrigem);
    cy.get('#destinationPostcode').should('be.visible').and('be.enabled').clear().type(cepDestino);
  }

  validarResultadoEsperado(precoEsperado) {
    //Verifica se o preço esperado está correto, garantindo que o cálculo do frete está visível e correto
    cy.get('#calculator-package-type-PAC-container').should('contain', precoEsperado);
  }

  calcularFrete() {
    // Verifica se o botão está visível antes de clicar
    cy.get('#calculator-discounted-shipping-button').should('be.visible').click();
  }

  validarMensagemDeErroCepOrigem(mensagemErroCepOrigem) {
    // Verifica se a mensagem de erro específica está presente na página
    cy.get('#originPostcode-helper-text').should('contain', mensagemErroCepOrigem);
  }

  validarMensagemDeErroCepDestino(mensagemErroCepDestino) {
    // Verifica se a mensagem de erro específica está presente na página
    cy.get('#destinationPostcode-helper-text').should('contain', mensagemErroCepDestino);
  }
  

 validarMensagemDeErroComprimentoAbaixoDe13(mensagemErroComprimento) {
  // Verifica se a mensagem de erro específica está presente na página
  cy.contains(mensagemErroComprimento).should('be.visible');
}

validarMensagemDeErroComprimentoAcimaDe150(mensagemErroComprimentoAcimaDe150) {
  // Verifica se a mensagem de erro específica está presente na página
  cy.contains(mensagemErroComprimentoAcimaDe150).should('be.visible');
}

  validarMensagemDeErroAlturaAbaixoDe04(mensagemErroAltura) {
    // Verifica se a mensagem de erro específica está presente na página
    cy.contains(mensagemErroAltura).should('be.visible');
  }

  validarMensagemDeErroAlturaAcimaDe150(mensagemErroAlturaAcima150) {
    // Verifica se a mensagem de erro específica está presente na página
    cy.contains(mensagemErroAlturaAcima150).should('be.visible');
  }

  validarMensagemDeErroLarguraAbaixoDe8(mensagemErroLargura) {
    // Verifica se a mensagem de erro específica está presente na página
    cy.contains(mensagemErroLargura).should('be.visible');
  }

  validarMensagemDeErroLarguraAcimaDe150(mensagemErroLarguraAcimaDe150) {
    // Verifica se a mensagem de erro especifica está presente na página
    cy.contains(mensagemErroLarguraAcimaDe150).should('be.visible');
  }
  
}

export default new CalculoFretePage();
