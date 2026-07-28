# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPageTest.spec.js >> Login to application
- Location: tests\LoginPageTest.spec.js:44:1

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e73]:
    - generic [ref=e76]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e78]: Discover more
      - link "Software quality assurance" [ref=e79] [cursor=pointer]:
        - generic "Software quality assurance" [ref=e80]
        - img [ref=e82]
      - link "Development Tools" [ref=e84] [cursor=pointer]:
        - generic "Development Tools" [ref=e85]
        - img [ref=e87]
      - link "User account management" [ref=e89] [cursor=pointer]:
        - generic "User account management" [ref=e90]
        - img [ref=e92]
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | const { LoginPage } = require("../Pages/LoginPage");
  3  | const configData = require("../utils/config.json");
  4  | const users = require("../utils/users.json");
  5  | 
  6  | let loginPage;
  7  | 
  8  | // Navigate to the signup/login page before each login-related test.
> 9  | test.beforeEach(async ({ page }) => {
     |      ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  10 |     loginPage = new LoginPage(page);
  11 |     await loginPage.goTo('/');
  12 |     await loginPage.navigateToSignupLoginPage();
  13 | });
  14 | 
  15 | // Verify that the Signup/Login page URL and title are loaded correctly.
  16 | test('Verify navigation to Signup/Login page', async ({ page }) => {
  17 |     await expect(page).toHaveURL(/.*login/);
  18 |     await expect(page).toHaveTitle("Automation Exercise - Signup / Login");
  19 | 
  20 | });
  21 | 
  22 | for (const user of users) {
  23 |   // Try to register a new user from test data and verify account creation.
  24 |   test(`Register new user: ${user.email}`, async ({ page }) => {
  25 |     await loginPage.registerNewUserStep1(user.name, user.email);
  26 |     // Check if existing user error is visible
  27 |     if (await loginPage.registerExistingUserErrorMessage.isVisible()) {
  28 |       test.skip(`User ${user.email} already exists, skipping.`);
  29 |       return;
  30 |     }
  31 |     await loginPage.registerNewUserStep2(user.password, user.firstName, user.lastName, user.address, user.state, user.city, user.zipcode, user.mobileNumber);
  32 |     await expect(loginPage.accountCreatedMessage).toHaveText('Account Created!');
  33 |     await loginPage.continueButton.click();
  34 |   });
  35 | }
  36 | 
  37 | // Verify that attempting to sign up with an existing email shows the expected error.
  38 | test('Register existing user', async ({ page }) => {
  39 |     await loginPage.registerExistingUser(configData.username, configData.password);
  40 |     await expect(loginPage.registerExistingUserErrorMessage).toContainText('Email Address already exist!');
  41 | });
  42 | 
  43 | // Verify successful login with valid credentials.
  44 | test('Login to application', async ({ page }) => {
  45 |     await loginPage.loginToApplication(configData.username, configData.password);
  46 |     await expect(loginPage.page).toHaveURL('/')
  47 | });
  48 | 
  49 | // Verify that invalid login credentials display the correct error message.
  50 | test('Login with invalid credentials', async ({ page }) => {
  51 |     await loginPage.loginWithInvalidCredentials(configData.invalidUsername, configData.invalidPassword);
  52 |     await expect(loginPage.page.locator("//p[contains(text(),'Your email or password is incorrect!')]")).toBeVisible();
  53 | });
```