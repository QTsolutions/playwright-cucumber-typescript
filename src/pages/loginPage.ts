import { expect, Page } from "@playwright/test";

export default class LoginPage {

    constructor(private page: Page) {
    }

    private Elements = {
        loginLinkBtn: "//span[text()='Login']",
        userInput: "Username",
        passwordInput: "Password",
        loginBtn: "button[color='primary']"
    }

    //clcik on  the login text on the home page
    async clickOnLoginText(){
        await this.page.click(this.Elements.loginLinkBtn)
    }
    
    //navigate to the login page
    async navigateToLoginPage() {
        await this.page.goto("/login");
        await expect(this.page).toHaveTitle("BookCart");
    }

    //enter username
    async enterUserName(user: string) {
        await this.page.getByLabel(this.Elements.userInput).fill(user);
    }

    //enter password
    async enterPassword(Password: string) {
        await this.page.getByLabel(this.Elements.passwordInput).fill(Password);
    }

    //click on the login button
    async clickLoginButton() {
        await this.page.click(this.Elements.loginBtn);
    }

    //user enters wrong username & password error message should display
    getErrorMessage() {
        return this.page.getByRole("alert");
    }

    //login user details
    async loginUser(user: string, password: string) {
        await this.enterUserName(user);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    //login is success
    async loginSucess(){
       return this.page.textContent;
    }

}