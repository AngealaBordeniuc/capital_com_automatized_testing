import { expect } from 'allure-playwright';
import {TRADING_MENU, tradingSubmenus} from '../../test-data/trading-menu';
import { handleCookiesPopUp,
   handleStayOnSitePopUp, 
   acceptAllCookies,
   handleModalWindowSignUp} from '../../helpers/pop_ups'

export class TradingSectionMenu {
  constructor(page) {
    this.page = page;
  }

  async openTradingSubMenu(menuKey) {
    const header = this.page.locator("#header");
   
    const tradingMenu = header.locator('a[href$="/ways-to-trade"]').first();
    await tradingMenu.hover({ force: true });

    const subLink = header
      .locator(`a[href$="${TRADING_MENU[menuKey]}"]:visible`)
      .first();

    await subLink.waitFor({ state: "visible", timeout: 10000 });
    await subLink.click();
  }

  async openAllPlatformsPage() {
    await this.openTradingSubMenu("ALL_PLATFORMS");
  }
  async openCFDCalculatorPage() {
    await this.openTradingSubMenu("CFD_CALCULATOR");
  }

  async openCFDTradingPage() {
    await this.openTradingSubMenu("CFD_TRADING");
  }

  async openDemoTradingPage() {
    await this.openTradingSubMenu("DEMO_TRADING");
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
}