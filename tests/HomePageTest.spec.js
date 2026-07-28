const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');
const { HomePage } = require('../Pages/HomePage');
const configData = require('../utils/config.json');
const contactFormData = require('../utils/contactFormData.json');

let homePage;
let loginPage;

// Navigate to the homepage before each home-page related test.
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.goTo('/');
});

// Verify the Test Cases page loads correctly from the homepage.
test('Validate test case page loaded', async ({ page }) => {
    homePage.validaTestCasesPageLoaded();
    await expect(page.locator('b:has-text("Test Cases")')).toHaveText('Test Cases');
});

// Verify submitting the contact form shows a success message.
test('Submit Contact Form', async ({ page }) => {
    await homePage.submitContactForm(
        contactFormData.name,
        contactFormData.email,
        contactFormData.subject,
        contactFormData.message,
        contactFormData.filePath
    );
    await expect(homePage.successMessage).toBeVisible();
});

// Verify the subscription section is visible in the footer.
test('Validate subscription in footer', async ({ page }) => {
    await expect(homePage.subscriptionHeading).toBeVisible();
    await expect(homePage.subscriptionHeading).toHaveText(/subscription/i);
});