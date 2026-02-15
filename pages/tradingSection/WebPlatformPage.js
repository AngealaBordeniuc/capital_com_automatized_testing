import { expect } from "allure-playwright";
import {handleModalWindowSignUp} from "../../helpers/modal_SignUp";

export class WebPlatformPage {
  constructor(page) {
    this.page = page;
    this.qrImage = page.getByRole("img", { name: "QR code" })
  }

  async clickCreateAccountButton() {   
    const createAccountBtn = this.page.locator('button[data-type="fullscreen_banner_block_btn1_signup"]');
    await expect(createAccountBtn).toBeVisible({ timeout: 10000 });
    await createAccountBtn.click();  
    await handleModalWindowSignUp(this.page, "/trading/platform/");
  }

  async getQrUrl() {
    const area =  this.page.locator('h2.c5pQ').nth(3);
    await area.scrollIntoViewIfNeeded();
    await expect(area).toBeVisible({ timeout: 10000 });        
    await expect(this.qrImage).toBeVisible({ timeout: 10000 });
    const src = await this.qrImage.getAttribute("src");
    return decodeURIComponent(
      new URLSearchParams(src.split("?")[1]).get("text")
    );
  }

  async verifyQrRedirect() {
    const qrUrl = await this.getQrUrl();
    await this.page.goto(qrUrl);
    await expect(this.page).toHaveURL(/apps\.apple\.com/);
    await expect(this.page).toHaveURL(/id1230088754/);  
  }
}