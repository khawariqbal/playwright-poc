const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../Pages/LoginPage");
const configData = require("../utils/config.json");
const users = require("../utils/users.json");

let loginPage;
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goTo('/');
    await loginPage.navigateToSignupLoginPage();
});

test('Verify navigation to Signup/Login page', async ({ page }) => {
    await expect(page).toHaveURL(/.*login/);
    await expect(page).toHaveTitle("Automation Exercise - Signup / Login");

});

for (const user of users) {
  test(`Register new user: ${user.email}`, async ({ page }) => {
    await loginPage.registerNewUserStep1(user.name, user.email);
    // Check if existing user error is visible
    if (await loginPage.registerExistingUserErrorMessage.isVisible()) {
      test.skip(`User ${user.email} already exists, skipping.`);
      return;
    }
    await loginPage.registerNewUserStep2(user.password, user.firstName, user.lastName, user.address, user.state, user.city, user.zipcode, user.mobileNumber);
    await expect(loginPage.accountCreatedMessage).toHaveText('Account Created!');
    await loginPage.continueButton.click();
  });
}

test('Register existing user', async ({ page }) => {
    await loginPage.registerExistingUser(configData.username, configData.password);
    await expect(loginPage.registerExistingUserErrorMessage).toContainText('Email Address already exist!');
});

test('Login to application', async ({ page }) => {
    await loginPage.loginToApplication(configData.username, configData.password);
    await expect(loginPage.page).toHaveURL('/')
});