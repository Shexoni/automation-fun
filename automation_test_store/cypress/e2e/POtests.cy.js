/// <reference types= "cypress"
import { Navbar_PO } from '../pageObjects/Navbar_PO';

const navbar_PO = new Navbar_PO();

describe('Testing the navbar', () => {
  beforeEach(() => {
    navbar_PO.visitHomepage();
  });

  it('Test Navbar', () => {
    // test the length of navbar
    navbar_PO.checkLengthNavBar();

    // test each button's name
    navbar_PO.buttonSelectors.forEach((selector, index) => {
      const button = cy.get(selector);
      navbar_PO.checkButtonName(button, navbar_PO.buttonNames[index]);
    });

    // test the length of dropdown menu for each button
    navbar_PO.buttonDropdownsSelectors.forEach((selector, index) => {
      const dropdown = cy.get(selector);
      navbar_PO.checkDropdownLength(
        dropdown,
        navbar_PO.buttonDropdownsLength[index]
      );
    });
  });

  it('Test item names and clicks', () => {
    // test the name and click of every item in every dropdown menu
    navbar_PO.buttonSelectors.forEach((selector, index) => {
      const currentButton = navbar_PO.dropdownItems[index];
      navbar_PO.checkDropdownItems(currentButton);
    });
  });
});
