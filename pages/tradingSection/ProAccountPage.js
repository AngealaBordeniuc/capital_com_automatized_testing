import { expect } from "@playwright/test";
import { handleModalWindowSignUp } from "../../helpers/modal_SignUp";
import {eligibilityCheck} from "../../helpers/eligibilityCheck";


export class ProAccountPage {
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

  async clickApplyButton(userState) {
    await eligibilityCheck(this.page);
    const applyBtn = this.page.locator(
      '[data-type*="homepage_hero_banner_btn"]',
    );
    await this.clickCTA(applyBtn);
    await handleModalWindowSignUp(this.page, userState);
  }

  async clickOpenAnAccountButton(userState) {
    await eligibilityCheck(this.page);
    const openAccountBtn = this.page.locator(
      '[data-type="cross_promo_block_btn1"]',
    );
    await this.clickCTA(openAccountBtn);
    await handleModalWindowSignUp(this.page, userState);
  }

  async clickLogInButton(userState) {
    await eligibilityCheck(this.page);
    const openAccountBtn = this.page.locator(
      '[data-type="cross_promo_block_btn2"]',
    );
    await this.clickCTA(openAccountBtn);
    await handleModalWindowSignUp(this.page, userState);
  }

  async getQrUrlNewToCapital() {
    const qrImage = this.page.locator("img[alt='QR code']").nth(0);
    const qrArea = this.page.locator("div.gWo8").nth(0);

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

  async verifyQrNewToCapital() {
    const qrUrl = await this.getQrUrlNewToCapital();
    await this.page.goto(qrUrl);
    await expect(this.page).toHaveURL(/(apps\.apple\.com|play\.google\.com)/);
  }

  async getQrUrlExisting() {
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

  async verifyQrExisting() {
    const qrUrl = await this.getQrUrlExisting();
    await this.page.goto(qrUrl);
    await expect(this.page).toHaveURL(/(apps\.apple\.com|play\.google\.com)/);
  }
}