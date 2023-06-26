import { expect, Page } from "@playwright/test";

export default class CartPage {

    constructor(private page: Page) {  }

    private Elements = {
        searchInput: "Search books or authors",
        clickBookOption: "mat-option[role='option'] span",
        addToCartBtn: "//button[@color='primary']",
        cartValue: "#mat-badge-content-0",
        snackBar: "//simple-snack-bar/span[1]",
        shoppingCart: "(//mat-icon[text()='shopping_cart'])[1]",
        clearCart: "//span[text()='Clear cart']",
        emptyCart: "//mat-card-title[text()=' Shopping cart is empty ']"
    }

    //search a book
    async serachBook(book: string){
        await this.page.getByPlaceholder(this.Elements.searchInput).type(book);
        await this.page.click(this.Elements.clickBookOption);
    }

    //add book to cart
    async addBookTocart(){
        await this.page.click(this.Elements.addToCartBtn);  
    }

    //add boook to cart toast is visible
    async visbleSnackBar(){
        const toast = this.page.locator(this.Elements.snackBar);
        return toast;
    }

    //get cart value
    async getCartValue(){
        await this.page.waitForTimeout(1000);
        await this.page.textContent(this.Elements.cartValue);
        await this.page.click(this.Elements.shoppingCart);
        await this.page.click(this.Elements.clearCart);
        await this.page.waitForTimeout(2000);
    }

    //verify that shopping cart is empty after click on clear cart button
    async clearCart(){
        const emptyCartItem = this.page.locator(this.Elements.emptyCart);
        return emptyCartItem;
    }
}