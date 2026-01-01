import {handleCookiesPopUp, handleStayOnSitePopUp, handleModalWindowSignUp} from "../../helpers/pop_ups";
export class TradingPage {
  constructor(page) {
    this.page = page;
  }

  async openTradingPage() {
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "Trading" }).first();
    await aboutMenu.click();
  }

  async clickCreateAccountButton() {
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);
    await this.page.getByRole("button", { name: "Create account" }).click();
  }

  async clickTryDemoAccountButton() {
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);
    await this.page.getByRole("button", { name: "Try demo account"}).click()
  }
}
