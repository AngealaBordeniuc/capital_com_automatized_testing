import { handleCookiesPopUp, handleStayOnSitePopUp, handleModalWindowSignUp} from '../../helpers/pop_ups'
export class TradingSectionMenu {
  constructor(page) {
    this.page = page;
  }

  async openCFDTradingPage() {
    await this.page.waitForTimeout(5000);
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "Trading" }).first();
    await handleStayOnSitePopUp(this.page);
    await aboutMenu.hover();
    await this.page.getByRole("link", { name: "CFD trading" }).first().click();
  }
  async openAllPlatformsPage() {
    await this.page.waitForTimeout(5000);
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "Trading" }).first();
    await handleStayOnSitePopUp(this.page);
    await aboutMenu.hover();
    await this.page
      .getByRole("link", { name: "All platforms" })
      .first()
      .click();
  }

  async openWebPlatformPage() {
    await this.page.waitForTimeout(5000);
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "Trading" }).first();
    await handleStayOnSitePopUp(this.page);
    await aboutMenu.hover();
    await this.page.getByRole("link", { name: "Web platform" }).first().click();
  }
  async openMobileAppsPage() {
    await this.page.waitForTimeout(5000);
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "Trading" }).first();
    await handleStayOnSitePopUp(this.page);
    await aboutMenu.hover();
    await this.page.getByRole("link", { name: "Mobile apps" }).first().click();
  }

  async openMT4Page() {
    await this.page.waitForTimeout(5000);
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "Trading" }).first();
    await handleStayOnSitePopUp(this.page);
    await aboutMenu.hover();
    await this.page.getByRole("link", { name: "MT4" }).first().click();
  }

  async openTradingViewPage() {
    await this.page.waitForTimeout(5000);
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "Trading" }).first();
    await handleStayOnSitePopUp(this.page);
    await aboutMenu.hover();
    await this.page.getByRole("link", { name: "TradingView" }).first().click();
  }
  async openMarginCallsPage() {
    await this.page.waitForTimeout(5000);
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "Trading" }).first();
    await handleStayOnSitePopUp(this.page);
    await aboutMenu.hover();
    await this.page.getByRole("link", { name: "Margin calls" }).first().click();
  }

  async openFraudPreventionPage() {
    await this.page.waitForTimeout(5000);
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "Trading" }).first();
    await handleStayOnSitePopUp(this.page);
    await aboutMenu.hover();
    await this.page
      .getByRole("link", { name: "Fraud prevention" })
      .first()
      .click();
  }

  async openDemoTradingPage() {
    await this.page.waitForTimeout(5000);
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "Trading" }).first();
    await handleStayOnSitePopUp(this.page);
    await aboutMenu.hover();
    await this.page.getByRole("link", { name: "Demo trading" }).first().click();
  }

  async openCFDCalculatorPage() {
    await this.page.waitForTimeout(5000);
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "Trading" }).first();
    await handleStayOnSitePopUp(this.page);
    await aboutMenu.hover();
    await this.page.getByRole("link", { name: "CFD calculator" }).first().click();
  }
}