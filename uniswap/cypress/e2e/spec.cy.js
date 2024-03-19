describe('testing swap functionality', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  afterEach(() => {
    cy.disconnectMetamaskWalletFromAllDapps();
  });
  it('successfully swaps ETH for WETH', () => {
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
  it('shows inefficient funds', () => {
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

  it('test the change position of tokens button', () => {});
  it('test inputting things other than numbers', () => {});

  // it.only('user should see balance amount', () => {
  //   cy.get('[data-testid="navbar-connect-wallet"]').click();
  //   cy.get('.WalletModal__OptionGrid-sc-176d03d-1.uWluI')
  //     .contains('MetaMask')
  //     .click();
  //   cy.acceptMetamaskAccess();
  //   let uniswapBalance;

  //   cy.get('[data-testid="currency-display-component__text"]  ').then((value) => {
  //     let walletBalance = value.text();
  //     uniswapBalance = walletBalance.toFixed(2);
  //   });
  //   cy.get('[data-testid="balance-text"]').should('have.text', uniswapBalance); imas dva ova selektora na strani
  // });
});
