const { test, expect } = require("@playwright/test");
class HomePage {
    constructor(page) {
        this.page = page;
        this.contactUsLink = page.locator("//a[@href='/contact_us']");
        this.name = page.locator("[data-qa='name']");
        this.email = page.locator("[data-qa='email']");
        this.subject = page.locator("[data-qa='subject']");
        this.message = page.locator("[data-qa='message']");
        this.uploadFile = page.locator("[name='upload_file']");
        this.submitButton = page.locator("[data-qa='submit-button']");
        this.successMessage = page.locator('div.status.alert.alert-success');
        this.testCasesLink = page.locator("//a[@href='/test_cases']").nth(0);
        this.subscriptionHeading = page.locator('h2:has-text("Subscription")');        
    }
    async submitContactForm(name, email, subject, message, filePath) {
        await this.contactUsLink.click();
        await this.name.fill(name);
        await this.email.fill(email);
        await this.subject.fill(subject);
        await this.message.fill(message);
        await this.uploadFile.setInputFiles(filePath);
        await this.page.waitForLoadState('networkidle');
        this.page.once('dialog', async dialog => {
            await dialog.accept();
        });
        await this.submitButton.click();
    }
    async validaTestCasesPageLoaded() {
        await this.testCasesLink.click();
    }
    async getSubscriptionHeading() {
        return this.subscriptionHeading;
    }
}
module.exports = { HomePage }