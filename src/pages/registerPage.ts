import { expect, Page } from "@playwright/test";
import { timeStamp } from "console";

export default class RegisterPage {

    constructor(private page: Page) {      
    }

    private Elements = {
        register: "button.mat-focus-indicator.mat-elevation-z4",
        fName: "input[formcontrolname='firstname']",
        lname: "input[formcontrolname='lastname']",
        userName: "input[formcontrolname='username']",
        password: "input[formcontrolname='password']",
        confirmPassword: "input[formcontrolname='confirmPassword']",
        maleInput: "input[value='Male']",
        femaleInput: "input[value='Female']",
        maleRadioBtn: "//span[contains(text(),'Male')]",
        femaleRadioBtn: "//span[contains(text(),'Female')]",
        regBtn: "button[color='primary']",
        bookCartLogo: "//span[text()=' Book Cart ']"
    }

    //navigate  to the register page
    async navigateToRegisterPage() {
      await this.page.click(this.Elements.register);
    }

    //register user details
    async registerUser(firstname: string, lastname: string, userName: string,
        password: string, confirmPassword: string,
        gender: string) {
        await this.page.type(this.Elements.fName, firstname);
        await this.page.type(this.Elements.lname, lastname);
       
        // this must be unique always
        const timestamp = Date.now().toString();
        await this.page.type(this.Elements.userName, `userName${timestamp}`);
        
        await this.page.type(this.Elements.password, password);
        await this.page.type(this.Elements.confirmPassword, confirmPassword);
        if (gender == "m") {
            await this.page.click(this.Elements.maleRadioBtn);
            await expect(this.page.locator(this.Elements.maleInput)).toBeChecked();
        } else {
            await this.page.click(this.Elements.femaleRadioBtn);
            await expect(this.page.locator(this.Elements.femaleInput)).toBeChecked();
        }
        const regBtn = this.page.locator(this.Elements.regBtn);
        await regBtn.click();
    }

    //bookcart logo is visible
    async bookCartLogoIsVisible(){
        const logo = this.page.locator(this.Elements.bookCartLogo);
        return logo;
    }
}
