import { expect } from "allure-playwright";
import { handleCookiesPopUp, handleStayOnSitePopUp, handleModalWindowSignUp } from "../../helpers/pop_ups";
export class DemoTradingPage {
  constructor(page) {
    this.page = page;
  }

  async clickTryDemoButton() {
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);
    await this.page.getByRole("button", { name: "Try demo" }).first().click();
    await handleModalWindowSignUp(this.page);
  }

  async getQrUrl() {
    const qrImage = this.page.getByRole("img", { name: "QR code" });
    await qrImage.scrollIntoViewIfNeeded();
    await qrImage.waitFor({ state: "visible" });
    const src = await qrImage.getAttribute("src");
    return decodeURIComponent(
      new URLSearchParams(src.split("?")[1]).get("text")
    );
  }

  async verifyQrRedirect() {
    const qrUrl = await this.getQrUrl();
    await this.page.goto(qrUrl);
    await expect(this.page).toHaveURL(/apps\.apple\.com/);
  }

  async clickCreateYourAccountButtonFromReady() {
    const bannerBtnReady = this.page.locator('[data-type="banner_with_steps"]');
    await bannerBtnReady.scrollIntoViewIfNeeded();
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);
    await bannerBtnReady.click({ force: true });
  }
}