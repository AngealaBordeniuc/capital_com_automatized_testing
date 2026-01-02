import {
  handleCookiesPopUp,
  handleStayOnSitePopUp,
  handleModalWindowSignUp,
} from "../../helpers/pop_ups";

export class WhyCapitalComPage {
  constructor(page) {
    this.page = page;
  }

  async clickCreateAccountButton() {
    await this.page.getByRole("button", { name: "Create account" }).click();
  }

  async clickTryDemoAccountButton() {
    const tryDemoAccountBtn = this.page.getByRole("button", {
      name: "Try demo account",
    });
    await tryDemoAccountBtn.waitFor({ state: "visible", timeout: 10000 });
    await tryDemoAccountBtn.click();
  }

  async clickCreateYourAccountButtonFromReady() {
    const bannerBtnReady = this.page.locator('[data-type="banner_with_steps"]');
    await bannerBtnReady.scrollIntoViewIfNeeded();
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);
    await bannerBtnReady.click({ force: true });
  }
}
