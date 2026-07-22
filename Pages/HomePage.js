const { expect } = require("@playwright/test");

class HomePage {

    constructor(page) {
        this.page = page;
        this.loggedInAsOption = page.getByText('Logged in as')
    }

    async validateHomePageLoaded() {
        await expect(this.loggedInAsOption).toBeVisible();
    }

}
module.exports = { HomePage };