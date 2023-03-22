import { locators } from '../resources/locators';
import TabsByTitle from '../resources/selectTitle';

class Assert {

    assertQueryes() {
        TabsByTitle.tabsTitle('Diagram1').click()
        cy.get(locators.sqlVisualise.collapseHandler).eq(1).should('have.css', 'display', 'none')
        cy.get(locators.sqlVisualise.diagramSVG).should('be.visible')
        TabsByTitle.tabsTitle('Diagram2').click()
        cy.get(locators.sqlVisualise.collapseHandler).eq(2).should('have.css', 'display', 'none')
        cy.get(locators.sqlVisualise.diagramSVG).should('be.visible')
        TabsByTitle.tabsTitle('Diagram3').click()
        cy.get(locators.sqlVisualise.collapseHandler).eq(3).should('have.css', 'display', 'none')
        cy.get(locators.sqlVisualise.diagramSVG).should('be.visible')
        TabsByTitle.tabsTitle('Diagram4').click()
        cy.get(locators.sqlVisualise.collapseHandler).eq(4).should('have.css', 'display', 'block')
        cy.get(locators.sqlVisualise.diagramSVG).should('be.visible')
        TabsByTitle.tabsTitle('Diagram5').click()
        cy.get(locators.sqlVisualise.collapseHandler).eq(5).should('have.css', 'display', 'block')
        cy.get(locators.sqlVisualise.diagramSVG).should('be.visible')
    }
}

module.exports = new Assert()