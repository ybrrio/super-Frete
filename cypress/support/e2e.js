
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora erros de "cross-origin" e erros de "Script error."
  if (err.message.includes('Script error.') || err.message.includes('cross-origin')) {
    return false;  // Retorna false para impedir que o Cypress falhe o teste
  }

  // Ignora erros específicos como "User is not logged!" e rejeições de promessas
  if (err.message.includes('User is not logged!') || err.message.includes('unhandled promise rejection')) {
    return false;  // Retorna false para ignorar esse erro e continuar o teste
  }

  // Ignora o erro ERR_INTERNET_DISCONNECTED
  if (err.message.includes('ERR_INTERNET_DISCONNECTED')) {
    return false;  // Retorna false para ignorar o erro de conexão
  }
  return false;
});


