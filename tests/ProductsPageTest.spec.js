const { test, expect } = require("@playwright/test");
const configData = require("../utils/config.json");
const { LoginPage } = require("../Pages/LoginPage");
const { DashboardPage } = require("../Pages/DashboardPage");
const { ProductsPage } = require("../Pages/ProductsPage");


/** @type {LoginPage} */
let loginPage;
/** @type {DashboardPage} */
let dashboardPage;
/** @type {ProductsPage} */
let productsPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goTo('/');
    await loginPage.navigateToSignupLoginPage();
    dashboardPage = await loginPage.loginToApplication(configData.username, configData.password);
    productsPage = await dashboardPage.goToProductsPage();
});

// Add a product to the cart and verify it was added successfully, including unit price, quantity, and total.
test('Add to cart', async () => {
    await productsPage.addFirstProductToCart();
    await expect(productsPage.unitPriceValue).toBe(500);
    await expect(productsPage.quantityValue).toBe(1);
    await expect(productsPage.calculatedTotal).toBe(productsPage.totalValue);
});

// Increase product quantity on the product details page, add to cart, and verify the cart quantity.
test('Verify product quantity in cart after increasing to 4', async () => {
    await productsPage.clearCartIfNeeded();
    await productsPage.addFirstProductToCartFromProductDetailsPage();
    await expect(productsPage.cartItems).toBeVisible();
    await expect(productsPage.quantity).toHaveText('4');
});

// Ensure the cart is cleared when items already exist.
test('Clear cart if items exist', async () => {
    await productsPage.clearCartIfNeeded();
    await expect(productsPage.cartItems).not.toBeVisible();
});
