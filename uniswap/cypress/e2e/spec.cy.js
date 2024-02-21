describe('connect wallet spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should connect wallet with success', () => {
    cy.get('[data-testid="navbar-connect-wallet"]').click();
    cy.get('.WalletModal__OptionGrid-sc-176d03d-1.uWluI')
      .contains('MetaMask')
      .click();
    cy.acceptMetamaskAccess();
  });
});
