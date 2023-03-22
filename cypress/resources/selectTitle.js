class TabsByTitle {

    tabsTitle(title) {
        return cy.get(`[title="${title}"] > .tab-label`)
    }

}

export default new TabsByTitle()