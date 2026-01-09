 import { expect } from "allure-playwright";
import { handleStayOnSitePopUp, handleCookiesPopUp, handleModalWindowSignUp } from "../../helpers/pop_ups";
 export class AllPlatformsPage {
   constructor(page) {
     this.page = page;
   }

   /**
    * Generic stable CTA click handler (popups + visibility + enabled)
    */
   async clickCTA(locator) {   
     await handleCookiesPopUp(this.page);
     await handleStayOnSitePopUp(this.page);
     await expect(locator).toBeAttached({ timeout: 10000 });
     await locator.scrollIntoViewIfNeeded();
     await expect(locator).toBeVisible({ timeout: 10000 });
     await expect(locator).toBeEnabled();
     await locator.click();
   }

   async clickCreateAccountButton() {
     const createAccountButton = this.page.getByRole("button", {
       name: "Create account",
     });
     await this.clickCTA(createAccountButton);
     await handleModalWindowSignUp(this.page);
   }

   async clickTryDemoAccountButton() {
     const tryDemoAccountButton = this.page.getByRole("button", {
       name: "Try demo account",
     });
     await this.clickCTA(tryDemoAccountButton);
     await handleModalWindowSignUp(this.page);
   }

   async clickSignUpButtonWhyChooseCapital() {
     const signUpButtonWhyChoose = this.page.getByRole("button", {
       name: "Sign up",
       exact: true,
     });
     await this.clickCTA(signUpButtonWhyChoose);
     await handleModalWindowSignUp(this.page);
   }
 }