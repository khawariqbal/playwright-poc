const { test, expect } = require("@playwright/test");
const { DashboardPage } = require("../Pages/DashboardPage");
const { ProductsPage } = require("../Pages/ProductsPage");
const { LoginPage } = require("../Pages/LoginPage");
const configData = require("../utils/config.json");

/** @type {LoginPage} */
let loginPage;
/** @type {DashboardPage} */
let dashboardPage;
/** @type {ProductsPage} */
let productsPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goTo('/');
    productsPage = new ProductsPage(page);
});

// Add a product to the cart and verify it was added successfully, including unit price, quantity, and total.
test('Add to cart', async () => {
    await productsPage.clearCartIfNeeded();
    await productsPage.addFirstProductToCart();
    await expect(productsPage.unitPriceValue).toBe(500);
    await expect(productsPage.quantityValue).toBe(1);
    await expect(productsPage.calculatedTotal).toBe(productsPage.totalValue);
});

// Increase product quantity on the product details page, add to cart, and verify the cart quantity.
test('Verify product quantity in cart after increasing to 4', async () => {
    await productsPage.clearCartIfNeeded();
    await productsPage.addFirstProductToCartFromProductDetailsPage();

    const quantityText = await productsPage.quantity.textContent();
    const quantityValue = Number(quantityText.replace(/[^\d]/g, ''));

    await expect(quantityValue).toBe(4);
});


