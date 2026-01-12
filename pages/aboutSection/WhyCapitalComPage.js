import {handleOptionalPopups,
  handleModalWindowSignUp,
} from "../../helpers/pop_ups";

export class WhyCapitalComPage {
  constructor(page) {
    this.page = page;
  }

  async clickCreateAccountButton() {
    await handleOptionalPopups(this.page)
    await this.page.getByRole("button", { name: "Create account" }).click();
    await handleModalWindowSignUp(this.page);
  }

  async clickTryDemoAccountButton() {
    await handleOptionalPopups(this.page)
    const tryDemoAccountBtn = this.page.getByRole("button", {
      name: "Try demo account",
    });
    await tryDemoAccountBtn.waitFor({ state: "visible", timeout: 10000 });
    await tryDemoAccountBtn.click();
    await handleModalWindowSignUp(this.page);
  }

  async clickCreateYourAccountButtonFromReady() {
    
    const bannerBtnReady = this.page.locator('[data-type="banner_with_steps"]');
    await bannerBtnReady.scrollIntoViewIfNeeded();
    await handleOptionalPopups(this.page);
    await bannerBtnReady.click({ force: true });
    await handleModalWindowSignUp(this.page);
  }
}
