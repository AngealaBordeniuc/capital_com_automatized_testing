import { expect } from "allure-playwright";
import { handleCookiesPopUp, handleModalWindowSignUp } from "../../helpers/pop_ups";

export class TradingViewPage {
  constructor(page) {
    this.page = page;
  }

  async verifyDownloadForDesktop() {
    const deskHeading = this.page.getByRole("heading", { name: "Desktop" });
    await deskHeading.scrollIntoViewIfNeeded();
    const downloadLink = this.page.locator('a[href*="TradingView.msix"]');
    await downloadLink.click();
  }
  async verifyDownloadForMacOs() {
    const deskHeading = this.page.getByRole("heading", { name: "MacOs" });
    await deskHeading.scrollIntoViewIfNeeded();
    const downloadLink = this.page.locator('a[href*="TradingView.dmg"]');
    await downloadLink.click();
  }
  async verifyDownloadForLinux() {
    const deskHeading = this.page.getByRole("heading", { name: "Linux" });
    await deskHeading.scrollIntoViewIfNeeded();
    const downloadLink = this.page.locator(
      'a[href*="snapcraft.io/tradingview"]'
    );

    const [newPage] = await Promise.all([
      this.page.waitForEvent("popup"),
      downloadLink.click(),
    ]);
    await newPage.waitForURL("https://snapcraft.io/tradingview", {
      timeout: 15000,
    });
  }
  async verifyLaunchBrowser() {
    const deskHeading = this.page.getByRole("heading", { name: "Browser" });
    await deskHeading.scrollIntoViewIfNeeded();
    const downloadLink = this.page.locator('a[href*="tradingview.com/chart"]');
    const [newPage] = await Promise.all([
      this.page.waitForEvent("popup"),
      downloadLink.click(),
    ]);
    await newPage.waitForURL("https://www.tradingview.com/chart/", {
      timeout: 15000,
    });
  }

  async clickTradingViewLink() {
    await this.page
      .getByRole("heading", { name: "How can I connect TradingView?" })
      .scrollIntoViewIfNeeded();
    const tradingViewLink = this.page
      .locator('a[href*="tradingview.com/broker"]')
      .nth(1);

    const [newPage] = await Promise.all([
      this.page.waitForEvent("popup"),
      tradingViewLink.click(),
    ]);

    await newPage.waitForURL("https://www.tradingview.com/broker/Capitalcom/", {
      timeout: 6000,
    });
  }

  async clickSignUpButtonHowCan() {
    await this.page
      .getByRole("heading", { name: "How can I connect TradingView?" })
      .scrollIntoViewIfNeeded();
    await handleCookiesPopUp(this.page);
    await this.page.getByRole("button", { name: "Sign up" }).nth(1).click();
    await handleModalWindowSignUp(this.page);
  }

  async clickSignUpButtonWhyChoose() {
    const signUpButtonWhyChoose = this.page.getByRole("button", { name: "Sign up" }).nth(2)
    signUpButtonWhyChoose.scrollIntoViewIfNeeded()
    signUpButtonWhyChoose.click()   
    await handleModalWindowSignUp(this.page);
  }
}