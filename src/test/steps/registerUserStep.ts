import { Given, When, Then } from "@cucumber/cucumber";
import RegisterPage from "../../pages/registerPage";
import { fixture } from "../../hooks/pageFixture";
import * as data from "../../helper/utils/test-data/registerUser.json";
import { expect } from "@playwright/test";

let registerPage: RegisterPage;

Given('I navigate to the register page', async function () {
    registerPage = new RegisterPage(fixture.page);
    await registerPage.navigateToRegisterPage();
});

When('I created a new user', async function () {
    const username = data.userName + Date.now().toString();
    await registerPage.registerUser(data.firstName, data.lastName,
        username, data.password, data.confirmPassword, "m");
});

Then('I confirm user registration is success', async function () {
    const logoVisible = await registerPage.bookCartLogoIsVisible();
    expect(logoVisible).toBeVisible();
});