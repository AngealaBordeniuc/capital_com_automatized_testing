import { expect } from "allure-playwright";
import {handleCookiesPopUp, 
  acceptAllCookies,  
  handleModalWindowSignUp
} from "../../helpers/pop_ups";
export class TradingPage {
  constructor(page) {
    this.page = page;
  }
  async clickCTA(buttonLocator) {   
    await acceptAllCookies(this.page);    
    await buttonLocator.scrollIntoViewIfNeeded();
    await expect(buttonLocator).toBeVisible({ timeout: 10000 });
    await expect(buttonLocator).toBeEnabled({ timeout: 10000 });
    await buttonLocator.click({trial: true})
    await buttonLocator.click();    
    await handleModalWindowSignUp(this.page);
  }

  async openTradingPage() {
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "Trading" }).first();
    await aboutMenu.click();
  }

  async clickCreateAccountButton() {    
    const createAccountBtn = this.page.getByRole("button", {
      name: "Create account",
    });
    await this.clickCTA(createAccountBtn);
   
  }

  async clickTryDemoAccountButton() {    
    const tryDemoAccountBtn = this.page.getByRole("button", {
      name: "Try demo account",
    });
    await this.clickCTA(tryDemoAccountBtn);    
  }
}
