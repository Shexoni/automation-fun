/// <reference types= "cypress"

describe('Testing the navbar', () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/');
  });

  it('Navbar testing', () => {
    // testing navbar length
    cy.get('.categorymenu.nav-pills').children().its('length').should('eq', 8);

    // testing button names
    cy.get('.menu_home').should('have.text', 'Home');
    cy.get('.subnav > ul > li:nth-of-type(2) > a').should(
      'have.text',
      '\u00A0\u00A0Apparel & accessories'
    );
    cy.get('.subnav > ul > li:nth-of-type(3) > a').should(
      'have.text',
      '\u00A0\u00A0Makeup'
    );
    cy.get('.subnav > ul > li:nth-of-type(4) > a').should(
      'have.text',
      '\u00A0\u00A0Skincare'
    );
    cy.get('.subnav > ul > li:nth-of-type(5) > a').should(
      'have.text',
      '\u00A0\u00A0Fragrance'
    );
    cy.get('.subnav > ul > li:nth-of-type(6) > a').should(
      'have.text',
      '\u00A0\u00A0Men'
    );
    cy.get('.subnav > ul > li:nth-of-type(7) > a').should(
      'have.text',
      '\u00A0\u00A0Hair Care'
    );
    cy.get('.subnav > ul > li:nth-of-type(8) > a').should(
      'have.text',
      '\u00A0\u00A0Books'
    );
  });

  it('First button ', () => {
    // testing dropdown length
    cy.get('#main_menu').children().its('length').should('eq', 4);

    // testing dropdown item names and clicks
    cy.get('#main_menu')
      .find('.menu_specials.top')
      .should('have.text', '\u00A0Specials')
      .click({ force: true });
    cy.get('.maintext').should('have.text', ' Special Offers');

    cy.get('#main_menu')
      .find('.menu_account.top')
      .should('have.text', '\u00A0Account')
      .click({ force: true });
    cy.get('.maintext').should('have.text', ' Account Login');

    cy.get('#main_menu')
      .find('.nobackground.top')
      .should('have.text', '\u00A0Cart')
      .click({ force: true });
    cy.get('.maintext').should('have.text', ' Shopping Cart');

    cy.get('#main_menu')
      .find('.menu_checkout.top')
      .should('have.text', '\u00A0Checkout')
      .click({ force: true });
    cy.get('.maintext').should('have.text', ' Shopping Cart');
  });

  it('Second button ', () => {
    // testing dropdown length
    cy.get('li:nth-of-type(2) .subcategories')
      .children()
      .its('length')
      .should('eq', 2);

    // testing dropdown item names and clicks
    cy.get('li:nth-of-type(2) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(1) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Shoes')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Shoes');

    cy.get('li:nth-of-type(2) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(2) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0T-shirts')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'T-shirts');
  });

  it('Third button ', () => {
    // testing dropdown length
    cy.get('li:nth-of-type(3) > .subcategories > ul:nth-of-type(1)')
      .children()
      .its('length')
      .should('eq', 6);

    // testing dropdown item names and clicks
    cy.get('li:nth-of-type(3) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(1) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Cheeks')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Cheeks');

    cy.get('li:nth-of-type(3) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(2) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Eyes')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Eyes');

    cy.get('li:nth-of-type(3) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(3) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Face')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Face');

    cy.get('li:nth-of-type(3) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(4) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Lips')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Lips');

    cy.get('li:nth-of-type(3) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(5) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Nails')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Nails');

    cy.get('li:nth-of-type(3) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(6) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Value Sets')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Value Sets');
  });

  it('Fourth button', () => {
    // testing dropdown length
    cy.get('li:nth-of-type(4) > .subcategories > ul:nth-of-type(1)')
      .children()
      .its('length')
      .should('eq', 5);

    // testing dropdown item names and clicks
    cy.get('li:nth-of-type(4) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(1) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Eyes')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Eyes');

    cy.get('li:nth-of-type(4) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(2) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Face')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Face');

    cy.get('li:nth-of-type(4) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(3) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Gift Ideas & Sets')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Gift Ideas & Sets');

    cy.get('li:nth-of-type(4) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(4) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Hands & Nails')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Hands & Nails');

    cy.get('li:nth-of-type(4) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(5) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Sun')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Sun');
  });

  it('Fifth button', () => {
    // testing dropdown length
    cy.get('li:nth-of-type(5) > .subcategories > ul:nth-of-type(1)')
      .children()
      .its('length')
      .should('eq', 2);

    // testing dropdown item names and clicks
    cy.get('li:nth-of-type(5) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(1) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Men')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Men');

    cy.get('li:nth-of-type(5) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(2) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Women')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Women');
  });

  it('Sixth button', () => {
    // testing dropdown length
    cy.get('li:nth-of-type(6) > .subcategories > ul:nth-of-type(1)')
      .children()
      .its('length')
      .should('eq', 4);

    // testing dropdown item names and clicks
    cy.get('li:nth-of-type(6) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(1) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Body & Shower')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Body & Shower');

    cy.get('li:nth-of-type(6) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(2) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Fragrance Sets')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Fragrance Sets');

    cy.get('li:nth-of-type(6) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(3) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Pre-Shave & Shaving')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Pre-Shave & Shaving');

    cy.get('li:nth-of-type(6) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(4) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Skincare')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Skincare');
  });

  it('Seventh button', () => {
    // testing dropdown length
    cy.get('li:nth-of-type(7) > .subcategories > ul:nth-of-type(1)')
      .children()
      .its('length')
      .should('eq', 2);

    // testing dropdown item names and clicks
    cy.get('li:nth-of-type(7) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(1) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Conditioner')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Conditioner');

    cy.get('li:nth-of-type(7) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(2) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Shampoo')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Shampoo');
  });

  it('Eighth button', () => {
    // testing dropdown length
    cy.get('li:nth-of-type(8) > .subcategories > ul:nth-of-type(1)')
      .children()
      .its('length')
      .should('eq', 2);

    // testing dropdown item names and clicks
    cy.get('li:nth-of-type(8) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(1) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Audio CD')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Audio CD');

    cy.get('li:nth-of-type(8) .subcategories')
      .find('ul:nth-of-type(1) > li:nth-of-type(2) > a')
      .should('have.text', '\u00A0\u00A0\u00A0\u00A0Paperback')
      .click({ force: true });
    cy.get('.maintext').should('have.text', 'Paperback');
  });
});
