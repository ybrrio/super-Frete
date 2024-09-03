// cypress/e2e/calculoFrete.cy.js
import CalculoFretePage from '../pages/calculoFretePage';
import dadosFrete from '../fixtures/dadosFrete.json';

describe('Testes de Cálculo de Frete', () => {
  beforeEach(() => {
    CalculoFretePage.limparCookiesEStorage();
    CalculoFretePage.visit();
  });

  it('Deve calcular o frete com sucesso para parâmetros válidos', () => {
    CalculoFretePage.selecionarPeso('Até 300g');
    CalculoFretePage.inserirDimensoes(16, 11, 2);
    CalculoFretePage.inserirCepOrigemDestino('08090-284', '05407-002');
    CalculoFretePage.calcularFrete();
    CalculoFretePage.validarResultadoEsperado(dadosFrete.precoEsperadoSucesso);
  });

  it('Deve exibir erro para comprimento inválido acima de 150 cm', () => {
    CalculoFretePage.selecionarPeso('Até 300g');
    CalculoFretePage.inserirDimensoes(151, 11, 2);
    CalculoFretePage.inserirCepOrigemDestino('08090-284', '05407-002');
    CalculoFretePage.calcularFrete();
    CalculoFretePage.validarMensagemDeErroComprimentoAcimaDe150(dadosFrete.mensagemErroComprimentoAcima150);
  });

  it('Deve exibir erro para cep destino inválido', () => {
    CalculoFretePage.selecionarPeso('Até 300g');
    CalculoFretePage.inserirDimensoes(16, 11, 2);
    CalculoFretePage.inserirCepOrigemDestino('08090-284', '054');
    CalculoFretePage.calcularFrete();
    CalculoFretePage.validarMensagemDeErroCepDestino(dadosFrete.mensagemErroCepDestino);
  });

  it('Deve exibir erro para largura inválida acima de 150', () => {
    CalculoFretePage.selecionarPeso('Até 300g');
    CalculoFretePage.inserirDimensoes(16, 151, 2);
    CalculoFretePage.inserirCepOrigemDestino('08090-284', '05407-002');
    CalculoFretePage.calcularFrete();
    CalculoFretePage.validarMensagemDeErroLarguraAcimaDe150(dadosFrete.mensagemErroLarguraAcimaDe150);
  });

  it('Deve exibir erro para cep origem inválido', () => {
    CalculoFretePage.selecionarPeso('Até 300g');
    CalculoFretePage.inserirDimensoes(16, 11, 2);
    CalculoFretePage.inserirCepOrigemDestino('080', '05407-002');
    CalculoFretePage.calcularFrete();
    CalculoFretePage.validarMensagemDeErroCepOrigem(dadosFrete.mensagemErroCepOrigem);
  });

  it('Deve exibir erro para altura inválida acima de 150 cm', () => {
    CalculoFretePage.selecionarPeso('Até 300g');
    CalculoFretePage.inserirDimensoes(16, 11, 151);
    CalculoFretePage.inserirCepOrigemDestino('08090-284', '05407-002');
    CalculoFretePage.calcularFrete();
    CalculoFretePage.validarMensagemDeErroAlturaAcimaDe150(dadosFrete.mensagemErroAlturaAcimaDe150);
  });


  it('Deve exibir erro para altura inválida abaixo de 0.4 cm', () => {
    CalculoFretePage.selecionarPeso('Até 300g');
    CalculoFretePage.inserirDimensoes(16, 11, 0.3);
    CalculoFretePage.inserirCepOrigemDestino('08090-284', '05407-002');
    CalculoFretePage.calcularFrete();
    CalculoFretePage.validarMensagemDeErroAlturaAbaixoDe04(dadosFrete.mensagemErroAlturaAbaixoDe04);
  });


  it('Deve exibir erro para largura inválida abaixo de 8', () => {
    CalculoFretePage.selecionarPeso('Até 300g');
    CalculoFretePage.inserirDimensoes(16, 7, 2);
    CalculoFretePage.inserirCepOrigemDestino('08090-284', '05407-002');
    CalculoFretePage.calcularFrete();
    CalculoFretePage.validarMensagemDeErroLarguraAbaixoDe8(dadosFrete.mensagemErroLarguraAbaixoDe8);
  });

  
  it('Deve exibir erro para comprimento inválido abaixo de 13 cm', () => {
    CalculoFretePage.selecionarPeso('Até 300g');
    CalculoFretePage.inserirDimensoes(10, 11, 2);
    CalculoFretePage.inserirCepOrigemDestino('08090-284', '05407-002');
    CalculoFretePage.calcularFrete();
    CalculoFretePage.validarMensagemDeErroComprimentoAbaixoDe13(dadosFrete.mensagemErroComprimentoAbaixo13);
  }); 

});
