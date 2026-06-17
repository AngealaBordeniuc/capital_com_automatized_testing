 import { expect } from "allure-playwright";
import {handleModalWindowSignUp, handleModalSignUpSellBuy} from "../../helpers/modal_SignUp";

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

   async clickExploreMarketsButton(userState) {
     const createAccountBtn = this.page.locator(
       '[data-type*="homepage_hero_banner_btn"]',
     );
     await this.clickCTA(createAccountBtn);
     await handleModalWindowSignUp(this.page, userState);
   } 

   async clickSellButtonOurCFDMarkets(userState) {
     const sellBtnOurCFDMarkets = this.page.locator(
       'a[data-type="wdg_markets_sell_btn"]',
     );
     await this.clickCTA(sellBtnOurCFDMarkets);
     await handleModalSignUpSellBuy(
       this.page,
       userState);
   }

   async clickBuyButtonOurCFDMarkets(userState) {
     const buyBtnOurCFDMarkets = this.page.locator(
       'a[data-type="wdg_markets_buy_btn"]',
     );
     await this.clickCTA(buyBtnOurCFDMarkets);
     await handleModalSignUpSellBuy(
       this.page,
       userState
     );
   }  

   async getQrUrlOrFail() {
     const qrImage = this.page.locator('img[alt="QR code"]');
     const qrArea = this.page.locator("div.gWo8").nth(1);

     await qrArea.scrollIntoViewIfNeeded();

     if ((await qrImage.count()) === 0) {
       await this.page.screenshot();
       throw new Error("❌QR code for this license is missing.");
     }
     const src = await qrImage.first().getAttribute("src");
     return decodeURIComponent(
       new URLSearchParams(src.split("?")[1]).get("text"),
     );
   }

   async verifyQrRedirect() {
     const qrUrl = await this.getQrUrlOrFail();
     await this.page.goto(qrUrl);
     await expect(this.page).toHaveURL(/apps\.apple\.com/);
   }
 }