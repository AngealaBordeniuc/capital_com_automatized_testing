import { handleModalWindowSignUp } from "../../helpers/pop_ups";
export class CFDCalculator {
  constructor(page) {
    this.page = page;
  }

   /**
      * Generic stable CTA click handler (popups + visibility + enabled)
      */
  async clickCTA(locator) {
    await locator.scrollIntoViewIfNeeded();
    await locator.click();
  }  

  async clickSignUpButton() {
    const signUpButton = this.page.getByRole("button", {name: "Sign up", exact: true});
    await this.clickCTA(signUpButton);    
    await handleModalWindowSignUp(this.page);
  }

  async clickTryDemoButton() {
    const tryDemoButton = this.page.getByRole("button", { name: "Try demo" });
    await this.clickCTA(tryDemoButton);
    await handleModalWindowSignUp(this.page);
  }

  async clickTradeNowButton() {
    const tradeNowButton = this.page.getByRole("button", { name: "Trade now" });
    await this.clickCTA(tradeNowButton);   
    await handleModalWindowSignUp(this.page);
  }

  async clickSignUpButtonHowToStart() {
    const signUpButtonHow = this.page.getByRole("link", { name: "Sign up" });
    await this.clickCTA(signUpButtonHow);   
    await handleModalWindowSignUp(this.page);
  }
}