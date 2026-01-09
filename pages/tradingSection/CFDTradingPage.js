 import { expect } from "allure-playwright";
import { handleStayOnSitePopUp, handleCookiesPopUp, handleModalWindowSignUp } from "../../helpers/pop_ups";
 export class CFDTradingPage {
   constructor(page) {
     this.page = page;
   }

   async clickCTA(locator) {
     // gestionează pop-up-urile global
     await this.page.waitForTimeout(2000);
     await handleCookiesPopUp(this.page);
     await handleStayOnSitePopUp(this.page);

     // asigură că elementul există și e vizibil
     await expect(locator).toBeAttached({ timeout: 10000 });
     await locator.scrollIntoViewIfNeeded();
     await expect(locator).toBeVisible({ timeout: 10000 });
     await expect(locator).toBeEnabled();     
     await locator.click();
   }

   async clickCreateAccountButton() {
     const createAccountBtn = this.page.getByRole("button", {name: "Create account"});   
     await this.clickCTA(createAccountBtn);
     await handleModalWindowSignUp(this.page);
   }

   async clickTryDemoAccountButton() {
     const tryDemoAccountBtn = this.page.getByRole("button", {name: "Try demo account"});
    await this.clickCTA(tryDemoAccountBtn);   
     await handleModalWindowSignUp(this.page);
   }

   async clickSellButtonOurCFDMarkets() {
     const sellBtnOurCFDMarkets = this.page.getByRole("link", { name: "Sell" });
     await this.clickCTA(sellBtnOurCFDMarkets);

       await expect(this.page).toHaveURL("/trading/platform/charting", {
         timeout: 10000,
       });
       await this.page.locator('input[type="email"]').waitFor();    
   }

   async ClickBuyButtonOurCFDMarkets() {
     const buyBtnOurCFDMarkets = this.page.getByRole("link", { name: "Buy" });
      await this.clickCTA(buyBtnOurCFDMarkets);
       await expect(this.page).toHaveURL("/trading/platform/charting", {
         timeout: 10000,
       });
       await this.page.locator('input[type="email"]').waitFor();
   }

   async clickCreateYourAccountButtonFromReady() {
     const bannerBtnReady = this.page.locator('[data-type="banner_with_steps"]');
      await this.clickCTA(bannerBtnReady);
     await handleModalWindowSignUp(this.page);
   }
 }