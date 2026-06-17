import {expect} from "@playwright/test";
import {handleModalWindowSignUp, handleModalSignUpSellBuy} from "../../helpers/modal_SignUp";

export class KnockOutsPage {
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
  async clickAccessKnockOutsButton(userState) {
    const accessKnockOutsBtn = this.page.locator(
      '[data-type="homepage_hero_banner_btn1_signup"]',
    );
    await this.clickCTA(accessKnockOutsBtn);
    await handleModalWindowSignUp(this.page, userState);
  }

  async clickPutButton(userState) {
    const putBtn = this.page.locator('a[data-type="wdg_markets_sell_btn"]');
    await this.clickCTA(putBtn);
    await handleModalSignUpSellBuy(this.page, userState);
  }

  async clickCallButton(userState) {
    const callBtn = this.page.locator('a[data-type="wdg_markets_buy_btn"]');
    await this.clickCTA(callBtn);
    await handleModalSignUpSellBuy(this.page, userState);
  }

  async getQrUrlOrFail() {
    const qrImage = this.page.locator("img[alt='QR code']").nth(1);
    const qrArea = this.page.locator("div.gWo8").nth(1);

    await qrArea.scrollIntoViewIfNeeded();

    if ((await qrImage.count()) === 0) {
      await this.page.screenshot();
      throw new Error("❌QR code for this license is missing.");
    }
    const src = await qrImage.getAttribute("src");
    return decodeURIComponent(
      new URLSearchParams(src.split("?")[1]).get("text"),
    );
  }

  async verifyQrRedirect() {
    const qrUrl = await this.getQrUrlOrFail();
    await this.page.goto(qrUrl);
    await expect(this.page).toHaveURL(/(apps\.apple\.com|play\.google\.com)/);
  }
}