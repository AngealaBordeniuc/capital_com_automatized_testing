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
    await tryDemoAccountBtn.waitFor({ state: "visible", timeout: 40000 });
    await tryDemoAccountBtn.click();
    await handleModalWindowSignUp(this.page);
  }

  async clickCreateYourAccountButtonFromReady() {
    //  await handleOptionalPopups(this.page);    
    const bannerBtnReady = this.page.locator('[data-type="banner_with_steps"]');
    await bannerBtnReady.waitFor({ state: "attached", timeout: 40000 });
    await bannerBtnReady.scrollIntoViewIfNeeded();
    await bannerBtnReady.waitFor({ state: "visible", timeout: 40000 });
    await bannerBtnReady.click({ force: true });
    await handleModalWindowSignUp(this.page);
  }
}
