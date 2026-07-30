const { test, expect } = require("@playwright/test");
const { DashboardPage } = require("../Pages/DashboardPage");
const { LoginPage } = require("../Pages/LoginPage");
const configData = require("../utils/config.json");

let dashboardPage;
let loginPage;

// Reuse the shared authenticated session for dashboard tests.
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await loginPage.goTo('/');
});

// Verify the dashboard indicates the user is logged in.
test('Verify Dashboard Page Loaded', async ({ page }) => {
    const loggedInText = await dashboardPage.getLoggedInText();
    await expect(loggedInText).toContain('Logged in as');
});

