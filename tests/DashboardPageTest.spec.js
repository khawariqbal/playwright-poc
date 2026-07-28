const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../Pages/LoginPage");
const configData = require("../utils/config.json")
const { DashboardPage } = require("../Pages/DashboardPage");

let loginPage, dashboardPage;

// Log in and navigate to the dashboard before each dashboard test.
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goTo('/');
    await loginPage.navigateToSignupLoginPage();
    dashboardPage = await loginPage.loginToApplication(configData.username, configData.password);
});

// Verify the dashboard indicates the user is logged in.
test('Verify Dashboard Page Loaded', async ({ page }) => {
    await expect(dashboardPage.getLoggedInText()).toContain('Logged in as');
});

