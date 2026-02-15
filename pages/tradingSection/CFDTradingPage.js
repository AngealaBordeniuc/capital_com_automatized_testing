 import { expect } from "allure-playwright";
import {handleModalWindowSignUp } from "../../helpers/modal_SignUp";

 export class CFDTradingPage {
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
     const createAccountBtn = this.page.locator(
       'button[data-type="background_banner_block_btn1_signup"]',
     );
     await this.clickCTA(createAccountBtn);
     await handleModalWindowSignUp(this.page, "/trading/platform/");
   }

   async clickTryDemoAccountButton() {
     const tryDemoAccountBtn = this.page.locator(
       'button[data-type="background_banner_block_btn2_demo"]',
     );
     await this.clickCTA(tryDemoAccountBtn);
     await handleModalWindowSignUp(this.page, "/trading/platform/");
   }

   async clickSellButtonOurCFDMarkets() {
     const sellBtnOurCFDMarkets = this.page.locator(
       'a[data-type="wdg_markets_sell_btn"]',
     );
     await this.clickCTA(sellBtnOurCFDMarkets);
     await handleModalWindowSignUp(this.page, /\/trading\/platform\/charting/);   
   }

   async clickBuyButtonOurCFDMarkets() {
     const buyBtnOurCFDMarkets = this.page.locator(
       'a[data-type="wdg_markets_buy_btn"]',
     );
     await this.clickCTA(buyBtnOurCFDMarkets);
     await handleModalWindowSignUp(this.page, /\/trading\/platform\/charting/);
   }

   async clickCreateYourAccountButtonFromReady() {
     const bannerBtnReady = this.page.locator(
       '[data-type="banner_with_steps"]',
     );
     await this.clickCTA(bannerBtnReady);       
     await handleModalWindowSignUp(this.page, "/trading/platform/");   
 }
}