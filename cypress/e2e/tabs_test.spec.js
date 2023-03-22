import TabsPage from '../pages/tabs.page';
import Utils from '../resources/utilities';
import Assert from '../pages/asserts.page';
import { locators } from '../resources/locators';

describe("Tabs functionality", () => {
    beforeEach(function () {
        cy.fixture('testData').then(function (testData) {
            this.testData = testData
            const url = Cypress.config().baseUrl;
            cy.visit(url)
            Utils.checkElement(locators.login.loginButton)
            cy.Login(this.testData.email, this.testData.password)
            Utils.waitForAPIToLoad('GET', 'https://auth.sonra.io/userinfo', 'userInfo', 200)
        })
    })

    it("Checking SQL Editor functionality between multiple tabs", function () {
        TabsPage.visualiseAndColapse()
        Assert.assertQueryes()
    })
});
