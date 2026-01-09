import { expect } from 'allure-playwright';
import { handleCookiesPopUp,
   handleStayOnSitePopUp, 
   acceptAllCookies,
   handleModalWindowSignUp} from '../../helpers/pop_ups'

export class TradingSectionMenu {
  constructor(page) {
    this.page = page;
  }

  async openTradingSubMenu(linkName, index) {
    await this.page.waitForTimeout(2000);
    await acceptAllCookies(this.page);
    // await handleCookiesPopUp(this.page);
    // await handleStayOnSitePopUp(this.page);
    await this.page.waitForSelector("#header", {
      state: "visible",
      timeout: 10000,
    });

    const header = this.page.locator("#header");
    const tradingMenu = header.getByRole("link", { name: "Trading" }).first();
    await tradingMenu.waitFor({ state: "visible", timeout: 10000 });
    await tradingMenu.hover({ force: true, timeout: 5000 });

    let subLink = header.getByRole("link", { name: linkName });
    if(index !== undefined){
      subLink = subLink.nth(index)
    }

    await expect(subLink).toBeVisible({ timeout: 10000 });
    await subLink.click();
  }

  async openCFDTradingPage() {    
    await this.openTradingSubMenu("CFD trading", 0)   
  }

  async openAllPlatformsPage() {
    await this.openTradingSubMenu("All platforms");    
  }

  async openWebPlatformPage() {
    await this.openTradingSubMenu("Web platform", 0);   
  }
  async openMobileAppsPage() {
    await this.openTradingSubMenu("Mobile apps", 0);   
  }

  async openMT4Page() {
    await this.openTradingSubMenu("MT4", 0);   
  }

  async openTradingViewPage() {
    await this.openTradingSubMenu("TradingView", 0);   
  }

  async openMarginCallsPage() {
    await this.openTradingSubMenu("Margin calls", 0);   
  }

  async openFraudPreventionPage() {
    await this.openTradingSubMenu("Fraud prevention", 0);   
  }

  async openDemoTradingPage() {
    await this.openTradingSubMenu("Demo trading", 0);   
  }

  async openCFDCalculatorPage() {   
    await this.openTradingSubMenu("CFD calculator");
  }
}