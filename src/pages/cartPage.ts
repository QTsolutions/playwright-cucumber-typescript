import { expect, Page } from "@playwright/test";

export default class CartPage {

    constructor(private page: Page) {  }

    private Elements = {
        searchInput: "Search books or authors",
        clickBookOption: "mat-option[role='option'] span",
        addToCartBtn: "//button[@color='primary']",
        cartValue: "#mat-badge-content-0",
        snackBar: "//simple-snack-bar/span[1]"
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
        return await this.page.textContent(this.Elements.cartValue)
    }
}