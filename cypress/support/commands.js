import { locators } from '../resources/locators';
import Utils from '../resources/utilities';

Cypress.Commands.add('paste', {
  prevSubject: true,
  element: true
}, ($element, text) => {
  const subString = text.substr(0, text.length - 1);
  const lastChar = text.slice(-1);

  $element.text(subString);
  $element.val(subString);
  cy.get($element.selector).type(lastChar);
});

Cypress.Commands.add('Login', (email, password) => {
  Utils.checkElement(locators.login.loginButton)
  cy.get(locators.login.loginButton).click()
  cy.get(locators.login.email).click();
  cy.get(locators.login.email).type(email, {force:true});
  cy.get(locators.login.password).click();
  cy.get(locators.login.password).type(password, {force:true});
  cy.get(locators.login.submitButton).click();

});