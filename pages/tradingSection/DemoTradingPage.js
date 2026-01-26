import { expect } from "allure-playwright";
import { handleCookiesPopUp, handleStayOnSitePopUp, handleModalWindowSignUp } from "../../helpers/pop_ups";
export class DemoTradingPage {
  constructor(page) {
    this.page = page;
  }

  async clickCTA(locator) {
    await expect(locator).toBeAttached({ timeout: 10000 });
    await locator.scrollIntoViewIfNeeded();
    await expect(locator).toBeVisible({ timeout: 10000 });
    await expect(locator).toBeEnabled();
    await locator.click();
  }

  async clickTryDemoButton() {
    const tryDemoBtn = this.page.locator(
      'button[data-type="background_banner_block_btn1_demo"]',
    );
    await this.clickCTA(tryDemoBtn);
    await handleModalWindowSignUp(this.page);
  } 

  async getQrUrlOrFail() {
    const qrImage = this.page.locator('img[alt="QR code"]');
    const qrArea = this.page.locator("div[class='Kzxh lgUb gWo8 grey']").nth(1);

    await qrArea.scrollIntoViewIfNeeded();

    if ((await qrImage.count()) === 0) {     
        await this.page.screenshot();
      throw new Error("❌QR code for this license is missing.");
    }   
    const src = await qrImage.first().getAttribute("src");
    return decodeURIComponent(
      new URLSearchParams(src.split("?")[1]).get("text"),
    );
  }


  async verifyQrRedirect() {
    const qrUrl = await this.getQrUrlOrFail();
    await this.page.goto(qrUrl);
    await expect(this.page).toHaveURL(/apps\.apple\.com/);
  }

  async clickCreateYourAccountButtonFromReady() {
    const bannerBtnReady = this.page.locator('[data-type="banner_with_steps"]');
    await this.clickCTA(bannerBtnReady);
    await handleModalWindowSignUp(this.page);
  }
}