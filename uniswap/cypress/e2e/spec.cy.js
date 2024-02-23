describe('testing swap functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it.only('successfully swaps ETH for WETH', () => {
    cy.get('[data-testid="navbar-connect-wallet"]').click();
    cy.get('.WalletModal__OptionGrid-sc-176d03d-1.uWluI')
      .contains('MetaMask')
      .click();
    cy.acceptMetamaskAccess();
    cy.get('.token-symbol-container')
      .contains('Select token')
      .click({ force: true });
    cy.get("div[title='Wrapped Ether']")
      .contains('Wrapped Ether')
      .click({ force: true });
    cy.get('input#swap-currency-input').type('0.1');
    cy.get('input#swap-currency-output').should('have.value', '0.1');
    cy.get('[data-testid="wrap-button"]').click();

    cy.confirmMetamaskPermissionToSpend();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Wrapped');
    });
  });
  it('shows inefficient funds', () => {});
});
