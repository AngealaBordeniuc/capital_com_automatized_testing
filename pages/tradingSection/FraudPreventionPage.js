import { expect } from "allure-playwright";
import { handleModalWindowSignUp } from "../../helpers/modal_SignUp";
export class FraudPreventionPage {
  constructor(page) {
    this.page = page;
  }

  async clickCreateYourAccountButtonFromReady() {
    const bannerBtnReady = this.page.locator('[data-type="banner_with_steps"]');
    await bannerBtnReady.scrollIntoViewIfNeeded();   
    await expect(bannerBtnReady).toBeVisible({timeout: 1000})
    await bannerBtnReady.click();
    await handleModalWindowSignUp(this.page, "/trading/platform/");
  }
}
