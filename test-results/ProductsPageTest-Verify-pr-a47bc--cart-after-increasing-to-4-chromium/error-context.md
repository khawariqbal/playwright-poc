# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ProductsPageTest.spec.js >> Verify product quantity in cart after increasing to 4
- Location: tests\ProductsPageTest.spec.js:32:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('a:has-text(\'View Product\')').first()

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
    - generic [ref=e66]:
      - insertion [ref=e68]:
        - generic [ref=e71]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e73]: Discover more
          - link "Online shopping cart" [ref=e74] [cursor=pointer]:
            - generic "Online shopping cart" [ref=e75]
            - img [ref=e77]
          - link "TV & Video Equipment" [ref=e79] [cursor=pointer]:
            - generic "TV & Video Equipment" [ref=e80]
            - img [ref=e82]
          - link "Product buying guides" [ref=e84] [cursor=pointer]:
            - generic "Product buying guides" [ref=e85]
            - img [ref=e87]
      - paragraph [ref=e91]: Copyright © 2021 All rights reserved
  - text: 
  - generic [ref=e92]:
    - generic [ref=e93] [cursor=pointer]:
      - img [ref=e95]
      - link "Go to shopping options for Website automation tutorials" [ref=e97]: Website automation tutorials
    - button "Close shopping anchor" [ref=e98]
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | const { text } = require("node:stream/consumers");
  3  | 
  4  | class ProductsPage {
  5  | 
  6  |     constructor(page) {
  7  |         this.page = page;
  8  |         this.productsLink = page.locator("//a[@href = '/products']");
  9  |         this.firstProductViewProductLink = page.locator("a:has-text('View Product')").first();
  10 |         this.quantityInput = page.locator('#quantity');
  11 |         this.addToCartBtn = page.getByText('Add to cart');
  12 |         this.continueShoppingBtn = page.getByText('Continue Shopping');
  13 |         this.viewCartLink = page.locator("//a[@href = '/view_cart']").nth(0);
  14 |         this.cartItemsDeleteIcons = page.locator("//td[@class = 'cart_delete']//a//i");
  15 |         this.unitPrice = page.locator('.cart_price');
  16 |         this.quantity = page.locator('.cart_quantity');
  17 |         this.total = page.locator('.cart_total_price');
  18 |     }
  19 |     async addFirstProductToCart() {
  20 | 
  21 |         await this.addToCartBtn.first().click();
  22 |         await this.viewCartLink.click();
  23 | 
  24 |         this.unitPriceText = await this.unitPrice.textContent();
  25 |         this.unitPriceValue = Number(this.unitPriceText.replace(/[^\d]/g, ''));
  26 | 
  27 |         this.quantityText = await this.quantity.textContent();
  28 |         this.quantityValue = Number(this.quantityText.replace(/[^\d]/g, ''));
  29 | 
  30 |         this.totalValueText = await this.total.textContent();
  31 |         this.totalValue = Number(this.totalValueText.replace(/[^\d]/g, ''));
  32 | 
  33 |         this.calculatedTotal = this.unitPriceValue * this.quantityValue;
  34 |     }
  35 |     async addFirstProductToCartFromProductDetailsPage() {
> 36 |         await this.firstProductViewProductLink.click();
     |                                                ^ Error: locator.click: Test timeout of 30000ms exceeded.
  37 |         await this.page.waitForLoadState('networkidle');
  38 |         await this.quantityInput.fill('4');
  39 |         await this.addToCartBtn.first().click();
  40 |         await this.viewCartLink.click();
  41 |     }
  42 | 
  43 |     async clearCartIfNeeded() {
  44 |         await this.viewCartLink.click();
  45 |         await this.page.waitForLoadState('networkidle');
  46 | 
  47 |         let deleteCount = await this.cartItemsDeleteIcons.count();
  48 |         if (deleteCount === 0) return;
  49 | 
  50 |         while (deleteCount > 0) {
  51 |             await this.cartItemsDeleteIcons.nth(0).click();
  52 |             await this.page.waitForLoadState('networkidle');
  53 |             deleteCount = await this.cartItemsDeleteIcons.count();
  54 |         }
  55 |     }
  56 | }
  57 | module.exports = { ProductsPage }
```