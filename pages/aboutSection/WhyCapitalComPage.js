import {handleOptionalPopups,
  handleModalWindowSignUp,
} from "../../helpers/pop_ups";

export class WhyCapitalComPage {
  constructor(page) {
    this.page = page;
  }

  async clickCreateAccountButton() {
    const btn = this.page.locator("text=/create account/i").first();

    await btn.waitFor({ state: "visible", timeout: 40000 });

    await Promise.all([
      this.page.waitForLoadState("domcontentloaded"),
      btn.click({ force: true }),
    ]);
    await handleModalWindowSignUp(this.page);
  }

  async clickTryDemoAccountButton() {
   const btn = this.page.locator("text=/try demo account/i").first();

   await btn.waitFor({ state: "visible", timeout: 40000 });

   await Promise.all([
     this.page.waitForLoadState("domcontentloaded"),
     btn.click({ force: true }),
   ]);
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
