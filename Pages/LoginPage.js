const { expect } = require("@playwright/test");
const { HomePage } = require("../Pages//HomePage");

class LoginPage {

    constructor(page) {
        this.page = page;
        this.singUpLoginTab = page.locator("//a[@href='/login']");
        this.name = page.locator("[data-qa='signup-name']");
        this.email = page.locator("[data-qa='signup-email']");
        this.signUpPassword = page.locator("[data-qa='password']");
        this.signUp = page.locator("[data-qa='signup-button']");
        this.firstName = page.locator("[data-qa='first_name']");
        this.lastName = page.locator("[data-qa='last_name']");
        this.address = page.locator("[data-qa='address']");
        this.state = page.locator("[data-qa='state']");
        this.city = page.locator("[data-qa='city']");
        this.zipcode = page.locator("[data-qa='zipcode']");
        this.mobileNumber = page.locator("[data-qa='mobile_number']");
        this.createAccountBtn = page.getByText('Create Account', { exact: true })
        this.userName = page.locator("[data-qa='login-email']");
        this.password = page.locator("[data-qa='login-password']");
        this.login = page.locator("[data-qa='login-button']");
    }

    async goTo() {
        await this.page.goto('baseUrl');
    }

    async navigateToSignupLoginPage() {
        await this.singUpLoginTab.click();
    }

    async registerNewUserStep1(name, email) {
        await this.name.type(name);
        await this.email.type(email);
        await this.signUp.click();
    }
    async registerNewUserStep2(password, firstName, lastName, address, state, city, zipcode, mobileNumber) {
        await this.signUpPassword.type(password);
        await this.firstName.type(firstName);
        await this.lastName.type(lastName);
        await this.address.type(address);
        await this.state.type(state);
        await this.city.type(city);
        await this.zipcode.type(zipcode);
        await this.mobileNumber.type(mobileNumber);
        await this.createAccountBtn.click();
    }

    get accountCreatedMessage() {
        return this.page.locator("[data-qa='account-created']");

    }

    get continueButton() {
        ``
        return this.page.locator("[data-qa='continue-button']");
    }

    async registerExistingUser(name, email) {
        await this.name.type(name);
        await this.email.type(email);
        await this.signUp.click();
    }

    get registerExistingUserErrorMessage() {
        return this.page.locator("//p[contains(text(),'Email Address already exist!')]");
    }

    async loginToApplication(username, password) {

        await this.userName.type(username);
        await this.password.type(password);
        await this.login.click();
        return new HomePage(this.page);
    }
}
module.exports = { LoginPage };