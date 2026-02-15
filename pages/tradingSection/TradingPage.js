import { expect } from "allure-playwright";
import { handleModalWindowSignUp} from "../../helpers/modal_SignUp";

export class TradingPage {
  constructor(page) {
    this.page = page;
  }
  async clickCTA(buttonLocator) {
    await buttonLocator.scrollIntoViewIfNeeded();
    await expect(buttonLocator).toBeVisible({ timeout: 10000 });
    await expect(buttonLocator).toBeEnabled({ timeout: 10000 });
    await buttonLocator.click();    
    await handleModalWindowSignUp(this.page, "/trading/platform/");
  }

  async openTradingPage() {
    const header = this.page.locator("#header");
     const tradingMenuLink = header.locator('a[href$="/ways-to-trade"]').first();
     await expect(tradingMenuLink).toBeVisible({ timeout: 10000 });
     await tradingMenuLink.click();
  }     

  async clickCreateAccountButton() {    
    const createAccountBtn = this.page.locator('button[data-type="background_banner_block_btn1_signup"]');
    await this.clickCTA(createAccountBtn);   
  }

  async clickTryDemoAccountButton() {    
    const tryDemoAccountBtn = this.page.locator('button[data-type="background_banner_block_btn2_demo"]');
    await this.clickCTA(tryDemoAccountBtn);
  }
}
