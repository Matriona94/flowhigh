import { locators } from "../resources/locators";
import { sample } from "../resources/sample";
import Utils from "../resources/utilities";

class TabsPage {
    
    visualiseAndColapse() {
    // 1
    Utils.newTab()
    cy.get(locators.sqlVisualise.sqlEditor).paste(sample.regularSQL)
    Utils.checkElement(locators.sqlVisualise.visualise)
    cy.get(locators.sqlVisualise.visualise).click()
    cy.get(locators.sqlVisualise.diagramSVG).should('be.visible')
    Utils.checkElement(locators.sqlVisualise.collapseHandler)
    cy.get(locators.sqlVisualise.collapseHandler).eq(1).click()
    cy.get(locators.sqlVisualise.collapseHandler).eq(2).should('have.css', 'display', 'none')
    // 2
    Utils.newTab()
    cy.get(locators.sqlVisualise.sqlEditor).paste(sample.regularSQL)
    Utils.checkElement(locators.sqlVisualise.visualise)
    cy.get(locators.sqlVisualise.visualise).click()
    cy.get(locators.sqlVisualise.diagramSVG).should('be.visible')
    Utils.checkElement(locators.sqlVisualise.collapseHandler)
    cy.get(locators.sqlVisualise.collapseHandler).eq(2).click()
    cy.get(locators.sqlVisualise.collapseHandler).eq(3).should('have.css', 'display', 'none')
    // 3
    Utils.newTab()
    cy.get(locators.sqlVisualise.sqlEditor).paste(sample.regularSQL)
    Utils.checkElement(locators.sqlVisualise.visualise)
    cy.get(locators.sqlVisualise.visualise).click()
    cy.get(locators.sqlVisualise.diagramSVG).should('be.visible')
    Utils.checkElement(locators.sqlVisualise.collapseHandler)
    cy.get(locators.sqlVisualise.collapseHandler).eq(3).click()
    cy.get(locators.sqlVisualise.collapseHandler).eq(4).should('have.css', 'display', 'block')
    // 4
    Utils.newTab()
    cy.get(locators.sqlVisualise.sqlEditor).paste(sample.regularSQL)
    Utils.checkElement(locators.sqlVisualise.visualise)
    cy.get(locators.sqlVisualise.visualise).click()
    cy.get(locators.sqlVisualise.diagramSVG).should('be.visible')
    Utils.checkElement(locators.sqlVisualise.collapseHandler)
    cy.get(locators.sqlVisualise.collapseHandler).eq(4).click()
    cy.get(locators.sqlVisualise.collapseHandler).eq(4).should('have.css', 'display', 'block')
    // 5
    Utils.newTab()
    cy.get(locators.sqlVisualise.sqlEditor).paste(sample.regularSQL)
    Utils.checkElement(locators.sqlVisualise.visualise)
    cy.get(locators.sqlVisualise.visualise).click()
    cy.get(locators.sqlVisualise.diagramSVG).should('be.visible')
    Utils.checkElement(locators.sqlVisualise.collapseHandler)
    cy.get(locators.sqlVisualise.collapseHandler).eq(5).click()
    cy.get(locators.sqlVisualise.collapseHandler).eq(5).should('have.css', 'display', 'block')
   }
}

module.exports = new TabsPage()