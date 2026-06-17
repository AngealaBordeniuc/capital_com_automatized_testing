import {TRADING_MENU} from '../../test-data/trading-menu';

export class TradingSectionMenu {
  constructor(page) {
    this.page = page;
  }

  async openTradingSubMenu(menuKey) {

     const header = this.page.locator("#header");

     const tradingMenu = header.locator("span.mnMQ").first();

     await tradingMenu.hover({ force: true });
     await this.page.waitForTimeout(200);

     const paths = Array.isArray(TRADING_MENU[menuKey])
       ? TRADING_MENU[menuKey]
       : [TRADING_MENU[menuKey]];

     const selector = paths
       .map((path) => `a[href$="${path}"]:visible`)
       .join(", ");

     const subLinks = header.locator(selector);

     if ((await subLinks.count()) === 0) {
       await this.page.screenshot();
       throw new Error(
         `❌ Submenu ${menuKey} does not exist for this license!`,
       );
     }

     const subLink = subLinks.first();
     await subLink.waitFor({ state: "visible", timeout: 10000 });
     await subLink.click();
    // const header = this.page.locator("#header");

    // // const tradingMenu = header.locator('a[href$="/ways-to-trade"]').first();
    // const tradingMenu = header.locator("span.mnMQ").first();

    // await tradingMenu.hover({ force: true });

    // await this.page.waitForTimeout(200);

    // const subLinks = header.locator(
    //   `a[href$="${TRADING_MENU[menuKey]}"]:visible`,
    // );

    // if ((await subLinks.count()) === 0) {
    //   await this.page.screenshot();
    //   throw new Error(`❌ Submenu ${menuKey} does not exist for this license!`);
    // }

    // const subLink = subLinks.first();
    // await subLink.waitFor({ state: "visible", timeout: 10000 });
    // await subLink.click();
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

  async openFraudPreventionPage() {
    await this.openTradingSubMenu("FRAUD_PREVENTION");
  }

  async openMarginCallsPage() {
    await this.openTradingSubMenu("MARGIN_CALLS");
  }

  async openMobileAppsPage() {
    await this.openTradingSubMenu("MOBILE_APPS");
  }

  async openMT4Page() {
    await this.openTradingSubMenu("MT4");
  }

  async openTradingViewPage() {
    await this.openTradingSubMenu("TRADING_VIEW");
  }

  async openWebPlatformPage() {
    await this.openTradingSubMenu("WEB_PLATFORM");
  }
  async openKnockOutsPage() {
    await this.openTradingSubMenu("KNOCK_OUTS");
  }
  async openProAccountPage() {
    await this.openTradingSubMenu("PRO_ACCOUNT");
  }
}