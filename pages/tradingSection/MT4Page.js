import { handleCookiesPopUp, 
  handleStayOnSitePopUp,
handleModalWindowSignUp } from "../../helpers/pop_ups";

export class MT4Page {
  constructor(page) {
    this.page = page;
  }

  async clickCreateAccountButton() {
    await handleCookiesPopUp(this.page);
    await this.page
      .getByRole("button", { name: "Create account" })
      .first()
      .click();
    await handleModalWindowSignUp(this.page);
  }

  async clickOpenAccountButton() {
    // await handleCookiesPopUp(this.page);
    // await handleStayOnSitePopUp(this.page);
    await this.page
      .getByRole("button", { name: "Open account" })
      .scrollIntoViewIfNeeded();
    await this.page.getByRole("button", { name: "Open account" }).click();
    await handleModalWindowSignUp(this.page);
  }

  async clickCreateAccountButton2() {
    await this.page
      .getByRole("button", { name: "Create account" })
      .nth(1)
      .scrollIntoViewIfNeeded();
    await this.page
      .getByRole("button", { name: "Create account" })
      .nth(1)
      .click();
      await handleModalWindowSignUp(this.page);
  }

  async verifyMt4DownloadForMac() {
    const macHeading = this.page.getByRole("heading", { name: "For Mac" });
    await macHeading.scrollIntoViewIfNeeded();
    const downloadLink = this.page.locator('a[href*="MetaTrader4.dmg"]');
    const downloadPromise = this.page.waitForEvent("download");
    await downloadLink.click();
    const download = await downloadPromise;
    if (!download) {
      throw new Error("The download was not triggered!");
    }
  }

  async verifyMt4DownloadForWindows() {
    const winHeading = this.page.getByRole("heading", { name: "For Windows" });
    await winHeading.scrollIntoViewIfNeeded();
    const downloadLink = this.page.locator('a[href*="capital.com4setup.exe"]');

    await downloadLink.click();
    console.log("Clicked on Windows download link.");
  }

  async verifyMt4DownloadGooglePlay() {
    const gplHeading = this.page.getByRole("heading", { name: "Google Play" });
    await gplHeading.scrollIntoViewIfNeeded();
    const downloadLink = this.page
      .locator('a[href*="Capital.com-Demo"]')
      .first();

    const [newPage] = await Promise.all([
      this.page.waitForEvent("popup"),
      downloadLink.click(),
    ]);
    await newPage.waitForURL(/play\.google\.com.*metatrader4/);
  }

  async verifyMt4DownloadAppStore() {
    const appStHeading = this.page.getByRole("heading", { name: "App Store" });
    await appStHeading.scrollIntoViewIfNeeded();
    const downloadLink = this.page
      .locator('a[href*="Capital.com-Demo"]')
      .nth(1);
    const [newPage] = await Promise.all([
      this.page.waitForEvent("popup"),
      downloadLink.click(),
    ]);
    await newPage.waitForURL(/apps\.apple\.com.*metatrader/);
  }

  async verifyMt4OpenWebTerminal() {
    const webTerminalHeading = this.page.getByRole("heading", {
      name: "Web Terminal",
    });
    await webTerminalHeading.scrollIntoViewIfNeeded();
    const webTerminalLink = this.page.locator('a[href*="capital.com/mt4"]');
    await webTerminalLink.click();
    await this.page.waitForURL("/mt4", { timeout: 6000 });
  }

  async clickSignUpButtonWhyChooseCapital() {
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);

    await this.page
      .getByRole("button", { name: "Sign up", exact: true })
      .scrollIntoViewIfNeeded();
    await this.page
      .getByRole("button", { name: "Sign up", exact: true })
      .click();
    await handleModalWindowSignUp(this.page);
  }

  async clickCreateYourAccountButtonFromReady() {
    const bannerBtnReady = this.page.locator('[data-type="banner_with_steps"]');
    await bannerBtnReady.scrollIntoViewIfNeeded();
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);
    await bannerBtnReady.click({ force: true });
    await handleModalWindowSignUp(this.page);
  }
}


  

