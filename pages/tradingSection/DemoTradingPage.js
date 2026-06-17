import { expect } from "allure-playwright";
import {handleModalWindowSignUp } from "../../helpers/modal_SignUp";
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

  async clickExploreDemoButton(userState) {
    const exploreDemoBtn = this.page.locator(
      '[data-type="homepage_hero_banner_btn1_demo"]',
    );
    await this.clickCTA(exploreDemoBtn);
    await handleModalWindowSignUp(this.page, userState);
  }  
}