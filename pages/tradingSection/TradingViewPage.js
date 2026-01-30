import { expect } from "allure-playwright";
import { handleCookiesPopUp, handleModalWindowSignUp } from "../../helpers/pop_ups";

export class TradingViewPage {
  constructor(page) {
    this.page = page;
  }

  async verifyDownloadForDesktop() {
    const downloadHeading = this.page.locator('h2[data-sentry-component="Heading"]').nth(2);
    await downloadHeading.scrollIntoViewIfNeeded();
    const downloadLink = this.page.locator('a[href*="TradingView.msix"]');
    await expect(downloadLink).toBeVisible({ timeout: 10000 });
    await downloadLink.click();
  }
  async verifyDownloadForMacOs() {
    const downloadHeading = this.page.locator('h2[data-sentry-component="Heading"]').nth(2);
    await downloadHeading.scrollIntoViewIfNeeded();
    const downloadLink = this.page.locator('a[href*="TradingView.dmg"]');
    await expect(downloadLink).toBeVisible({ timeout: 10000 });
    await downloadLink.click();
  }
  async verifyDownloadForLinux() {
    const downloadHeading = this.page.locator('h2[data-sentry-component="Heading"]').nth(2);
    await downloadHeading.scrollIntoViewIfNeeded();
    const downloadLink = this.page.locator(
      'a[href*="snapcraft.io/tradingview"]'
    );

    if(await downloadLink.isVisible()){
    const [newPage] = await Promise.all([
      this.page.waitForEvent("popup"),
      downloadLink.click(),
    ]);
    await newPage.waitForURL("https://snapcraft.io/tradingview",
       {timeout: 30000, waitUntil: "load"});
  } else{
    throw new Error ("Linux download link is not visible")
  }
  }

  async verifyLaunchBrowser() {
   const downloadHeading = this.page.locator('h2[data-sentry-component="Heading"]').nth(2);
   await downloadHeading.scrollIntoViewIfNeeded();
    const downloadLink = this.page.locator('a[href*="tradingview.com/chart"]');
    const [newPage] = await Promise.all([
      this.page.waitForEvent("popup"),
      downloadLink.click(),
    ]);
    await newPage.waitForURL("https://www.tradingview.com/chart/", 
      {timeout: 30000})      
  } 


  async clickTradingViewLink() {
    const howCanHeading = this.page.locator('h2[data-sentry-component="Heading"]').nth(1);
    await howCanHeading.scrollIntoViewIfNeeded();
   
    const tradingViewLink = this.page.locator('a[href*="tradingview.com/broker"]').nth(1);

    const [newPage] = await Promise.all([
      this.page.waitForEvent("popup"),
      tradingViewLink.click(),
    ]);

    await newPage.waitForURL("https://www.tradingview.com/broker/Capitalcom/", {
      timeout: 6000,
    });
  }

  async clickSignUpHowCanButton() {
   const howCanHeading = this.page.locator('h2[data-sentry-component="Heading"]').nth(1);
   await howCanHeading.scrollIntoViewIfNeeded();
   
    const signUpBtn = this.page.locator('button[data-type="background_banner_block_btn1_signup"]');
    await expect(signUpBtn).toBeVisible({ timeout: 10000 });
    await signUpBtn.click();
    await handleModalWindowSignUp(this.page);
  }

  async clickSignUpWhyChooseButton() {
    const area = this.page.locator('div[class="HGwk cRY3 ME6O"]').nth(6);
    await area.scrollIntoViewIfNeeded();
    
    const signUpButtonWhyChoose = this.page.locator('button[data-type="tiles_w_img_btn2_signup"]');
    await expect(signUpButtonWhyChoose).toBeVisible({ timeout: 10000 });
    await signUpButtonWhyChoose.click()   
    await handleModalWindowSignUp(this.page);
  }
}