/// <reference types= "cypress"

export class Navbar_PO {
  visitHomepage() {
    cy.visit('https://automationteststore.com/');
  }

  checkLengthNavBar() {
    cy.get('.categorymenu.nav-pills').children().its('length').should('eq', 8);
  }

  buttonSelectors = [
    '.menu_home',
    '.subnav > ul > li:nth-of-type(2) > a',
    '.subnav > ul > li:nth-of-type(3) > a',
    '.subnav > ul > li:nth-of-type(4) > a',
    '.subnav > ul > li:nth-of-type(5) > a',
    '.subnav > ul > li:nth-of-type(6) > a',
    '.subnav > ul > li:nth-of-type(7) > a',
    '.subnav > ul > li:nth-of-type(8) > a',
  ];

  buttonNames = [
    'Home',
    '\u00A0\u00A0Apparel & accessories',
    '\u00A0\u00A0Makeup',
    '\u00A0\u00A0Skincare',
    '\u00A0\u00A0Fragrance',
    '\u00A0\u00A0Men',
    '\u00A0\u00A0Hair Care',
    '\u00A0\u00A0Books',
  ];

  buttonDropdownsSelectors = [
    '#main_menu',
    'li:nth-of-type(2) .subcategories',
    'li:nth-of-type(3) > .subcategories > ul:nth-of-type(1)',
    'li:nth-of-type(4) > .subcategories > ul:nth-of-type(1)',
    'li:nth-of-type(5) > .subcategories > ul:nth-of-type(1)',
    'li:nth-of-type(6) > .subcategories > ul:nth-of-type(1)',
    'li:nth-of-type(7) > .subcategories > ul:nth-of-type(1)',
    'li:nth-of-type(8) > .subcategories > ul:nth-of-type(1)',
  ];

  buttonDropdownsLength = [4, 2, 6, 5, 2, 4, 2, 2];

  checkButtonName(button, name) {
    button.should('be.visible').and('have.text', name);
  }

  getButtonSelector(index) {
    return navbar_PO.buttonSelectors[index];
  }

  checkDropdownLength(dropdown, length) {
    dropdown.children().its('length').should('eq', length);
  }
  getButtonDropdownSelector(index) {
    return navbar_PO.buttonDropdownsSelectors[index];
  }

  // objects including dropdown item name and selector
  // \u00A0 =  no-break space
  dropdownItems = [
    [
      { item: '\u00A0Specials', selector: '#main_menu .menu_specials' },
      { item: '\u00A0Account', selector: '#main_menu .menu_account' },
      { item: '\u00A0Cart', selector: '#main_menu .nobackground' },
      { item: '\u00A0Checkout', selector: '#main_menu .menu_checkout' },
    ],
    [
      {
        item: '\u00A0\u00A0\u00A0\u00A0Shoes',
        selector:
          'li:nth-of-type(2) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(1) > a',
      },
      {
        item: '\u00A0\u00A0\u00A0\u00A0T-shirts',
        selector:
          'li:nth-of-type(2) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(2) > a',
      },
    ],
    [
      {
        item: '\u00A0\u00A0\u00A0\u00A0Cheeks',
        selector:
          'li:nth-of-type(3) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(1) > a',
      },
      {
        item: '\u00A0\u00A0\u00A0\u00A0Eyes',
        selector:
          'li:nth-of-type(3) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(2) > a',
      },
      {
        item: '\u00A0\u00A0\u00A0\u00A0Face',
        selector:
          'li:nth-of-type(3) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(3) > a',
      },
      {
        item: '\u00A0\u00A0\u00A0\u00A0Lips',
        selector:
          'li:nth-of-type(3) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(4) > a',
      },
      {
        item: '\u00A0\u00A0\u00A0\u00A0Nails',
        selector:
          'li:nth-of-type(3) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(5) > a',
      },
      {
        item: '\u00A0\u00A0\u00A0\u00A0Value Sets',
        selector: '.subcategories > ul:nth-of-type(1) > li:nth-of-type(6) > a',
      },
    ],
    [
      {
        item: '\u00A0\u00A0\u00A0\u00A0Eyes',
        selector:
          'li:nth-of-type(4) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(1) > a',
      },
      {
        item: '\u00A0\u00A0\u00A0\u00A0Face',
        selector:
          'li:nth-of-type(4) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(2) > a',
      },
      {
        item: '\u00A0\u00A0\u00A0\u00A0Gift Ideas & Sets',
        selector:
          'li:nth-of-type(4) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(3) > a',
      },
      {
        item: '\u00A0\u00A0\u00A0\u00A0Hands & Nails',
        selector:
          'li:nth-of-type(4) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(4) > a',
      },
      {
        item: '\u00A0\u00A0\u00A0\u00A0Sun',
        selector:
          'li:nth-of-type(4) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(5) > a',
      },
    ],
    [
      {
        item: '\u00A0\u00A0\u00A0\u00A0Men',
        selector:
          'li:nth-of-type(5) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(1) > a',
      },
      {
        item: '\u00A0\u00A0\u00A0\u00A0Women',
        selector:
          'li:nth-of-type(5) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(2) > a',
      },
    ],
    [
      {
        item: '\u00A0\u00A0\u00A0\u00A0Body & Shower',
        selector:
          'li:nth-of-type(6) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(1) > a',
      },
      {
        item: '\u00A0\u00A0\u00A0\u00A0Fragrance Sets',
        selector:
          'li:nth-of-type(6) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(2) > a',
      },
      {
        item: '\u00A0\u00A0\u00A0\u00A0Pre-Shave & Shaving',
        selector:
          'li:nth-of-type(6) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(3) > a',
      },
      {
        item: '\u00A0\u00A0\u00A0\u00A0Skincare',
        selector:
          'li:nth-of-type(6) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(4) > a',
      },
    ],
    [
      {
        item: '\u00A0\u00A0\u00A0\u00A0Conditioner',
        selector:
          'li:nth-of-type(7) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(1) > a',
      },
      {
        item: '\u00A0\u00A0\u00A0\u00A0Shampoo',
        selector:
          'li:nth-of-type(7) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(2) > a',
      },
    ],
    [
      {
        item: '\u00A0\u00A0\u00A0\u00A0Audio CD',
        selector:
          'li:nth-of-type(8) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(1) > a',
      },
      {
        item: '\u00A0\u00A0\u00A0\u00A0Paperback',
        selector:
          'li:nth-of-type(8) > .subcategories > ul:nth-of-type(1) > li:nth-of-type(2) > a',
      },
    ],
  ];

  // maps containging items with content to check successful click
  // \u00A0 =  no-break space
  contentMapping = {
    '\u00A0Specials': ' Special Offers',
    '\u00A0Account': ' Account Login',
    '\u00A0Cart': ' Shopping Cart',
    '\u00A0Checkout': ' Shopping Cart',
    '\u00A0\u00A0\u00A0\u00A0Shoes': 'Shoes',
    '\u00A0\u00A0\u00A0\u00A0T-shirts': 'T-shirts',
    '\u00A0\u00A0\u00A0\u00A0Cheeks': 'Cheeks',
    '\u00A0\u00A0\u00A0\u00A0Eyes': 'Eyes',
    '\u00A0\u00A0\u00A0\u00A0Face': 'Face',
    '\u00A0\u00A0\u00A0\u00A0Lips': 'Lips',
    '\u00A0\u00A0\u00A0\u00A0Nails': 'Nails',
    '\u00A0\u00A0\u00A0\u00A0Value Sets': 'Value Sets',
    '\u00A0\u00A0\u00A0\u00A0Eyes': 'Eyes',
    '\u00A0\u00A0\u00A0\u00A0Face': 'Face',
    '\u00A0\u00A0\u00A0\u00A0Gift Ideas & Sets': 'Gift Ideas & Sets',
    '\u00A0\u00A0\u00A0\u00A0Hands & Nails': 'Hands & Nails',
    '\u00A0\u00A0\u00A0\u00A0Sun': 'Sun',
    '\u00A0\u00A0\u00A0\u00A0Men': 'Men',
    '\u00A0\u00A0\u00A0\u00A0Women': 'Women',
    '\u00A0\u00A0\u00A0\u00A0Body & Shower': 'Body & Shower',
    '\u00A0\u00A0\u00A0\u00A0Fragrance Sets': 'Fragrance Sets',
    '\u00A0\u00A0\u00A0\u00A0Pre-Shave & Shaving': 'Pre-Shave & Shaving',
    '\u00A0\u00A0\u00A0\u00A0Skincare': 'Skincare',
    '\u00A0\u00A0\u00A0\u00A0Conditioner': 'Conditioner',
    '\u00A0\u00A0\u00A0\u00A0Shampoo': 'Shampoo',
    '\u00A0\u00A0\u00A0\u00A0Audio CD': 'Audio CD',
    '\u00A0\u00A0\u00A0\u00A0Paperback': 'Paperback',
  };

  // testing click on every dropdown item
  checkDropdownItems(dropdownItems) {
    dropdownItems.forEach(({ item, selector }) => {
      cy.get(selector).click({ force: true });

      const expectedContent = this.contentMapping[item];
      console.log(expectedContent);
      cy.get('.maintext').should('have.text', expectedContent);
    });
  }
}
