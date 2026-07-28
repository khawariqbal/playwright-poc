const { test, expect } = require("@playwright/test");
const { text } = require("node:stream/consumers");

class ProductsPage {

    constructor(page) {
        this.page = page;
        this.productsLink = page.locator("//a[@href = '/products']");
        this.firstProductViewProductLink = page.locator("a:has-text('View Product')").first();
        this.quantityInput = page.locator('#quantity');
        this.addToCartBtn = page.getByText('Add to cart');
        this.continueShoppingBtn = page.getByText('Continue Shopping');
        this.viewCartLink = page.locator("//a[@href = '/view_cart']").nth(0);
        this.cartItemsDeleteIcons = page.locator("//td[@class = 'cart_delete']//a//i");
        this.unitPrice = page.locator('.cart_price');
        this.quantity = page.locator('.cart_quantity');
        this.total = page.locator('.cart_total_price');
    }
    async addFirstProductToCart() {

        await this.addToCartBtn.first().click();
        await this.viewCartLink.click();

        this.unitPriceText = await this.unitPrice.textContent();
        this.unitPriceValue = Number(this.unitPriceText.replace(/[^\d]/g, ''));

        this.quantityText = await this.quantity.textContent();
        this.quantityValue = Number(this.quantityText.replace(/[^\d]/g, ''));

        this.totalValueText = await this.total.textContent();
        this.totalValue = Number(this.totalValueText.replace(/[^\d]/g, ''));

        this.calculatedTotal = this.unitPriceValue * this.quantityValue;
    }
    async addFirstProductToCartFromProductDetailsPage() {
        await this.firstProductViewProductLink.click();
        await this.page.waitForLoadState('networkidle');
        await this.quantityInput.fill('4');
        await this.addToCartBtn.first().click();
        await this.viewCartLink.click();
    }

    async clearCartIfNeeded() {
        await this.viewCartLink.click();
        await this.page.waitForLoadState('networkidle');

        let deleteCount = await this.cartItemsDeleteIcons.count();
        if (deleteCount === 0) return;

        while (deleteCount > 0) {
            await this.cartItemsDeleteIcons.nth(0).click();
            await this.page.waitForLoadState('networkidle');
            deleteCount = await this.cartItemsDeleteIcons.count();
        }
    }
}
module.exports = { ProductsPage }