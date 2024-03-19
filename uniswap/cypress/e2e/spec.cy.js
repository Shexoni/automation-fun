describe('testing swap functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  afterEach(() => {
    cy.disconnectMetamaskWalletFromAllDapps();
  });
  it('verify swap with sufficient funds', () => {
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
  it('verify swap with inefficient funds', () => {
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
    cy.get('input#swap-currency-input').type('999999');
    cy.get('input#swap-currency-output').should('have.value', '999999');
    cy.get('[data-testid="wrap-button"]')
      .should('be.disabled')
      .contains('Insufficient ETH balance');
  });

  it.only('verify correct balance is displayed', () => {
    cy.get('[data-testid="navbar-connect-wallet"]').click();
    cy.get('.WalletModal__OptionGrid-sc-176d03d-1.uWluI')
      .contains('MetaMask')
      .click();
    cy.acceptMetamaskAccess();

    let uniswapBalance = 1.95;

    cy.get('[data-testid="currency-display-component__text"]  ').then(
      (value) => {
        let walletBalance = value.text();
        uniswapBalance = walletBalance.toFixed(2);
      }
    );

    cy.get('#swap-currency-input').within(() => {
      cy.get('[data-testid="balance-text"]').should(
        'have.text',
        'Balance: ' + uniswapBalance
      );
    });
  });

  // it('test the change position of tokens button', () => {});
  it('verify only numbers could be typed in', () => {
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
    cy.get('input#swap-currency-input').type('This should not be typed');
    cy.get('input#swap-currency-input').should('have.text', '');
    cy.get('input#swap-currency-input').type('@@@!!!');
    cy.get('input#swap-currency-input').should('have.text', '');
  });
});
