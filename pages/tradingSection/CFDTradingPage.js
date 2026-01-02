 import { handleStayOnSitePopUp, handleCookiesPopUp } from "../../helpers/pop_ups";
 export class CFDTradingPage {
   constructor(page) {
     this.page = page;
   }

   async clickCreateAccountButton() {
     await this.page.getByRole("button", { name: "Create account" }).click();
   }
   async clickTryDemoAccountButton() {
     await this.page.getByRole("button", { name: "Try demo account" }).click();
   }

   async clickSellButtonOurCFDMarkets() {
     await this.page
       .getByRole("link", { name: "Sell" })
       .scrollIntoViewIfNeeded();
     await handleCookiesPopUp(this.page);
     await handleStayOnSitePopUp(this.page);
     await this.page.getByRole("link", { name: "Sell" }).click();
   }

   async ClickBuyButtonOurCFDMarkets() {
     await this.page
       .getByRole("link", { name: "Buy" })
       .scrollIntoViewIfNeeded();
     await handleCookiesPopUp(this.page);
     await handleStayOnSitePopUp(this.page);
     await this.page.getByRole("link", { name: "Buy" }).click();
   }
   
   async clickCreateYourAccountButtonFromReady() {
    const bannerBtnReady = this.page.locator('[data-type="banner_with_steps"]');
    await bannerBtnReady.scrollIntoViewIfNeeded();
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);
    await bannerBtnReady.click({force: true});
     }
 }