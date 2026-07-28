# Ecommerce Automation Demo Project

This repository contains Playwright end-to-end automation for the AutomationExercise website.

## Automated test cases

The following test cases are automated in the current suite:

- `tests/LoginPageTest.spec.js`
  - Verify navigation to the Signup/Login page
  - Register new users from test data
  - Verify error when registering an existing user
  - Verify successful login with valid credentials
  - Verify login failure with invalid credentials

- `tests/HomePageTest.spec.js`
  - Verify the Test Cases page loads correctly from the homepage
  - Submit the Contact Us form and validate the success message
  - Verify the footer subscription section is visible

- `tests/DashboardPageTest.spec.js`
  - Verify the dashboard page loads and shows the logged-in user text

- `tests/ProductsPageTest.spec.js`
  - Add the first product to cart and verify price, quantity, and total
  - Increase quantity to 4 from the product details page and verify cart quantity
  - Clear the cart if items already exist

## Project structure

- `Pages/` - page object classes for Login, Home, Dashboard, and Products
- `tests/` - Playwright test files
- `utils/` - test data and configuration files
- `playwright.config.js` - Playwright configuration

## Run tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Run a single spec file:

```bash
npx playwright test tests/ProductsPageTest.spec.js
```
