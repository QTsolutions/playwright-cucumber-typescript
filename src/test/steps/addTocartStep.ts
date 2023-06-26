import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 2)
import { expect } from "@playwright/test";
import { fixture } from "../../hooks/pageFixture";
import CartPage from "../../pages/cartPage";

let cartPage : CartPage;

Given('user search for a {string}', async function (book) {
    fixture.logger.info("Searching for a book: " + book)
    cartPage = new CartPage(fixture.page)
    await cartPage.serachBook(book);
});

When('user add the book to the cart', async function () {
    await cartPage.addBookTocart();
    const snackbar = await cartPage.visbleSnackBar();
    expect(snackbar).toBeVisible();
});

Then('the cart badge should get updated and clear the cart', async function () {
    await cartPage.getCartValue();
    const emptyCartItem = await cartPage.clearCart();
    expect(emptyCartItem).toBeVisible();
});