const { test, expect } = require("@playwright/test");
const { HomePage } = require("../Pages/HomePage");
const { LoginPage } = require("../Pages/LoginPage");
const configData = require("../utils/config.json")

test('Verify Home Page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    const homePage = await loginPage.loginToApplication(configData.username, configData.password);
    await homePage.validateHomePageLoaded();
});
