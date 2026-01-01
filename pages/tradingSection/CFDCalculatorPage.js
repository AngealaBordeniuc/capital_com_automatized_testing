import { handleModalWindowSignUp } from "../../helpers/pop_ups";
export class CFDCalculator {
  constructor(page) {
    this.page = page;
  }

  async clickSignUpButton() {
    await this.page
      .getByRole("button", { name: "Sign up", exact: true })
      .click();
    await handleModalWindowSignUp(this.page);
  }

  async clickTryDemoButton() {
    await this.page.getByRole("button", { name: "Try demo" }).click();
    await handleModalWindowSignUp(this.page);
  }

  async clickTradeNowButton() {
    const tradeNowButton = this.page.getByRole("button", { name: "Trade now" });
    await tradeNowButton.scrollIntoViewIfNeeded();
    await tradeNowButton.click();
    await handleModalWindowSignUp(this.page);
  }

  async clickSignUpButtonHowToStart() {
    const signUpButtonHow = this.page.getByRole("link", { name: "Sign up" })
    await signUpButtonHow.scrollIntoViewIfNeeded()
    await signUpButtonHow.click();     
    await handleModalWindowSignUp(this.page);
  }
}