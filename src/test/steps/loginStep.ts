import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/loginPage";

setDefaultTimeout(60 * 1000 * 2)
let loginPage: LoginPage;

Given('User navigates to the application', async function () {
    loginPage = new LoginPage(fixture.page)
    await fixture.page.goto(process.env.BASEURL);
    fixture.logger.info("Navigated to the application")
})

Given('User click on the login link', async function () {
    await loginPage.clickOnLoginText();
});

Given('User enter the username as {string}', async function (username) {
    await loginPage.enterUserName(username);
});

Given('User enter the password as {string}', async function (password) {
    await loginPage.enterPassword(password);
})

When('User click on the login button', async function () {
    await loginPage.clickLoginButton();
    await fixture.page.waitForLoadState();
    fixture.logger.info("Waiting for 2 seconds")
    await fixture.page.waitForTimeout(2000);
});

Then('Login should be success', async function () {
    const text = await loginPage.loginSucess();
    console.log("Username: " + text);
    fixture.logger.info("Username: " + text);
})

When('Login should fail', async function () {
    const failureMessage = await loginPage.getErrorMessage();
    await expect(failureMessage).toBeVisible();
});