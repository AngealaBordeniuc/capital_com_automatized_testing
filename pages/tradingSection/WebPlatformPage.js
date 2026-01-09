import { expect } from "allure-playwright";
import {handleModalWindowSignUp} from "../../helpers/pop_ups";

export class WebPlatformPage {
  constructor(page) {
    this.page = page;
    this.qrImage = page.getByRole("img", { name: "QR code" })
  }

  async clickCreateAccountButton() {   
    const createAccountBtn = this.page.getByRole("button", { name: "Create account" });
    await expect(createAccountBtn).toBeVisible({ timeout: 10000 });
    await createAccountBtn.click();
    await handleModalWindowSignUp(this.page);   
  }

  async getQrUrl() {
    await this.qrImage.scrollIntoViewIfNeeded();
    await this.qrImage.waitFor({ state: "visible" });
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