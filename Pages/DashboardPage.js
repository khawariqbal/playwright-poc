const { expect } = require("@playwright/test");
const {ProductsPage} = require("../Pages/ProductsPage");

class DashboardPage {

    constructor(page) {
        this.page = page;
        this.loggedInAs = page.getByText('Logged in as', { exact: false });
        this.productsLink = page.locator("//a[@href = '/products']");
    }
    async getLoggedInText() {
        return await this.loggedInAs.textContent();
    }
    async goToProductsPage() {
        await this.productsLink.click();
        return new ProductsPage(this.page);
    }
}
module.exports = { DashboardPage };