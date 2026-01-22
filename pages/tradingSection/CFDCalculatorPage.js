import { handleModalWindowSignUp } from "../../helpers/pop_ups";
export class CFDCalculator {
  constructor(page) {
    this.page = page;
  }

  async clickCTA(locator) {
    await locator.scrollIntoViewIfNeeded();
    await locator.click();
  }  

  async clickSignUpButton() {
    const signUpButton = this.page.locator('button[data-type="background_banner_block_btn1_signup"]')
    await this.clickCTA(signUpButton);    
    await handleModalWindowSignUp(this.page);
  }

  async clickTryDemoButton() {
    const tryDemoButton = this.page.locator('button[data-type="background_banner_block_btn2_demo"]');
    await this.clickCTA(tryDemoButton);
    await handleModalWindowSignUp(this.page);
  }

  async clickTradeNowButton() {
    const tradeNowButton = this.page.locator('button[data-type="markets_analysts_btn"]');    
    await this.clickCTA(tradeNowButton);   
    await handleModalWindowSignUp(this.page);
  }

  async clickSignUpButtonHowToStart() {
    const signUpButtonHow = this.page.locator('a[data-type="plain_button"]');
    await this.clickCTA(signUpButtonHow);   
    await handleModalWindowSignUp(this.page);
  }
}