# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ProductsPageTest.spec.js >> Clear cart if items exist
- Location: tests\ProductsPageTest.spec.js:40:1

# Error details

```
Error: toBeVisible can be only used with Locator object, was called with undefined
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
          - link " Logout" [ref=e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link " Delete Account" [ref=e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link " Test Cases" [ref=e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link " API Testing" [ref=e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link " Video Tutorials" [ref=e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link " Contact us" [ref=e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e39]: 
            - text: Contact us
        - listitem [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - text: Logged in as Khawar Iqbal
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link "Home" [ref=e48] [cursor=pointer]:
          - /url: /
      - listitem [ref=e49]: Shopping Cart
    - paragraph [ref=e52]:
      - text: Cart is empty! Click
      - link "here" [ref=e53] [cursor=pointer]:
        - /url: /products
      - text: to buy products.
  - contentinfo [ref=e54]:
    - generic [ref=e59]:
      - heading "Subscription" [level=2] [ref=e60]
      - generic [ref=e61]:
        - textbox "Your email address" [ref=e62]
        - button "" [ref=e63] [cursor=pointer]:
          - generic [ref=e64]: 
        - paragraph [ref=e65]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e69]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e71]:
    - generic [ref=e74]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e76]: Discover more
      - link "Test case management" [ref=e77] [cursor=pointer]:
        - generic "Test case management" [ref=e78]
        - img [ref=e80]
      - link "Shopping & Retailers" [ref=e82] [cursor=pointer]:
        - generic "Shopping & Retailers" [ref=e83]
        - img [ref=e85]
      - link "API testing tools" [ref=e87] [cursor=pointer]:
        - generic "API testing tools" [ref=e88]
        - img [ref=e90]
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | const configData = require("../utils/config.json");
  3  | const { LoginPage } = require("../Pages/LoginPage");
  4  | const { DashboardPage } = require("../Pages/DashboardPage");
  5  | const { ProductsPage } = require("../Pages/ProductsPage");
  6  | 
  7  | 
  8  | /** @type {LoginPage} */
  9  | let loginPage;
  10 | /** @type {DashboardPage} */
  11 | let dashboardPage;
  12 | /** @type {ProductsPage} */
  13 | let productsPage;
  14 | 
  15 | test.beforeEach(async ({ page }) => {
  16 |     loginPage = new LoginPage(page);
  17 |     await loginPage.goTo('/');
  18 |     await loginPage.navigateToSignupLoginPage();
  19 |     dashboardPage = await loginPage.loginToApplication(configData.username, configData.password);
  20 |     productsPage = await dashboardPage.goToProductsPage();
  21 | });
  22 | 
  23 | // Add a product to the cart and verify it was added successfully, including unit price, quantity, and total.
  24 | test('Add to cart', async () => {
  25 |     await productsPage.addFirstProductToCart();
  26 |     await expect(productsPage.unitPriceValue).toBe(500);
  27 |     await expect(productsPage.quantityValue).toBe(1);
  28 |     await expect(productsPage.calculatedTotal).toBe(productsPage.totalValue);
  29 | });
  30 | 
  31 | // Increase product quantity on the product details page, add to cart, and verify the cart quantity.
  32 | test('Verify product quantity in cart after increasing to 4', async () => {
  33 |     await productsPage.clearCartIfNeeded();
  34 |     await productsPage.addFirstProductToCartFromProductDetailsPage();
  35 |     await expect(productsPage.cartItems).toBeVisible();
  36 |     await expect(productsPage.quantity).toHaveText('4');
  37 | });
  38 | 
  39 | // Ensure the cart is cleared when items already exist.
  40 | test('Clear cart if items exist', async () => {
  41 |     await productsPage.clearCartIfNeeded();
> 42 |     await expect(productsPage.cartItems).not.toBeVisible();
     |                                              ^ Error: toBeVisible can be only used with Locator object, was called with undefined
  43 | });
  44 | 
```