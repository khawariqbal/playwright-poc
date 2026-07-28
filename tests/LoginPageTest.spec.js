const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../Pages/LoginPage");
const configData = require("../utils/config.json");
const users = require("../utils/users.json");

let loginPage;

// Navigate to the signup/login page before each login-related test.
test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goTo('/');
    await loginPage.navigateToSignupLoginPage();
});

// Verify that the Signup/Login page URL and title are loaded correctly.
test('Verify navigation to Signup/Login page', async ({ page }) => {
    await expect(page).toHaveURL(/.*login/);
    await expect(page).toHaveTitle("Automation Exercise - Signup / Login");

});

for (const user of users) {
  // Try to register a new user from test data and verify account creation.
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

// Verify that attempting to sign up with an existing email shows the expected error.
test('Register existing user', async ({ page }) => {
    await loginPage.registerExistingUser(configData.username, configData.password);
    await expect(loginPage.registerExistingUserErrorMessage).toContainText('Email Address already exist!');
});

// Verify successful login with valid credentials.
test('Login to application', async ({ page }) => {
    await loginPage.loginToApplication(configData.username, configData.password);
    await expect(loginPage.page).toHaveURL('/')
});

// Verify that invalid login credentials display the correct error message.
test('Login with invalid credentials', async ({ page }) => {
    await loginPage.loginWithInvalidCredentials(configData.invalidUsername, configData.invalidPassword);
    await expect(loginPage.page.locator("//p[contains(text(),'Your email or password is incorrect!')]")).toBeVisible();
});