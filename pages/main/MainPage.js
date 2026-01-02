import { handleCookiesPopUp, handleStayOnSitePopUp } from "../../helpers/pop_ups";

export class MainPage {
  constructor(page) {
    this.page = page;
  }

  async clickSignUpButton() {
    await this.page.waitForTimeout(1000);
    await handleStayOnSitePopUp(this.page);
    await handleCookiesPopUp(this.page);
    await this.page.getByRole("button", { name: "Sign up" }).nth(1).click();
  }

  async clickTryDemoButton() {
    await this.page.waitForTimeout(1000);
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);
    const tryDemoBtn = this.page
      .locator("#bannerHomePage")
      .getByRole("button", { name: "Try demo" });
    await tryDemoBtn.click();
  }
  async clickSignUpButtonWhyChooseCapitalCom() {
    await this.page.waitForTimeout(1000);
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);
    await this.page
      .getByRole("button", { name: "Sign up" })
      .nth(2)
      .scrollIntoViewIfNeeded();
    await this.page.getByRole("button", { name: "Sign up" }).nth(2).click();
  }

  async clickSellButtonOurMarkets() {
    await this.page
      .getByRole("link", { name: "Sell" })
      .scrollIntoViewIfNeeded();
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);
    await this.page.getByRole("link", { name: "Sell" }).click();
  }

  async ClickBuyButtonOutMarkets() {
    await this.page.getByRole("link", { name: "Buy" }).scrollIntoViewIfNeeded();
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);
    await this.page.getByRole("link", { name: "Buy" }).click();
  }

  async clickTryDemoButtonForLearnerTraders() {
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);
    await this.page
      .getByRole("button", { name: "Try demo" })
      .nth(1)
      .scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(1000);
    await handleStayOnSitePopUp(this.page);
    await this.page.getByRole("button", { name: "Try demo" }).nth(1).click();
  }

  async clickSignUpButtonForLearnerTraders() {
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);

    const signUpBtnLearner = this.page
      .getByRole("button", { name: "Sign up" })
      .nth(3);
    await signUpBtnLearner.waitFor({ state: "visible", timeout: 10000 });
    await signUpBtnLearner.scrollIntoViewIfNeeded();
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);
    await signUpBtnLearner.click({ force: true });
  }

  async clickCreateYourAccountButtonFromReady() {
    const bannerBtnReady = this.page.locator('[data-type="banner_with_steps"]');
    await bannerBtnReady.scrollIntoViewIfNeeded();
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);
    await bannerBtnReady.click({ force: true });
  }
}