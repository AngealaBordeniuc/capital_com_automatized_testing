 import { expect } from "allure-playwright";
import { handleStayOnSitePopUp, handleCookiesPopUp, handleModalWindowSignUp } from "../../helpers/pop_ups";
 export class AllPlatformsPage {
   constructor(page) {
     this.page = page;
   }

   
   async clickCTA(locator) {      
     await expect(locator).toBeAttached({ timeout: 10000 });
     await locator.scrollIntoViewIfNeeded();
     await expect(locator).toBeVisible({ timeout: 10000 });
     await expect(locator).toBeEnabled();
     await locator.click();
   }

   async clickCreateAccountButton() {
     const createAccountButton = this.page.locator('button[data-type="fullscreen_banner_block_btn1_signup"]');
     await this.clickCTA(createAccountButton);
     await handleModalWindowSignUp(this.page);
   }

   async clickTryDemoAccountButton() {
     const tryDemoAccountButton = this.page.locator(
       'button[data-type="fullscreen_banner_block_btn2demo"]');
     await this.clickCTA(tryDemoAccountButton);
     await handleModalWindowSignUp(this.page);
   }

   async clickSignUpButtonWhyChooseCapital() {
     const signUpButtonWhyChoose = this.page.locator(
       'button[data-type="numbers_block_btn"]',
     );
     await this.clickCTA(signUpButtonWhyChoose);
     await handleModalWindowSignUp(this.page);
   }
 }