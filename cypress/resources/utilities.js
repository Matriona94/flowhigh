import { locators } from '../resources/locators';

class Utils {

    newTab() {
        cy.get(locators.sqlVisualise.newTab).click()
    }

    checkElement(element) {
        cy.get(element).should('be.visible')
        if (cy.get(element).should('not.be.disabled') == true) {
            return true
        } else if (cy.get(element).should('not.be.disabled') == false) {
            cy.get(element).invoke('prop', 'disabled', false)
            cy.get(element).should('not.be.disabled')
        }
    }

    waitForAPIToLoad(method, apiPath, alias, statusCode) {
        cy.intercept(method, apiPath).as(alias)
        cy.wait(`@${alias}`).its('response.statusCode').should('eq', statusCode)
    }
}

module.exports = new Utils()