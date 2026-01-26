export class MobileAppsPage {
  constructor(page) {
    this.page = page;
    this.qrImage1 = page.locator('img[alt="QR code"]').first();
    this.qrImage2 = page.locator('img[alt="QR code"]').nth(2);
    this.qrArea1 = page.locator('div[data-sentry-component="Text"]').nth(1);
    this.qrArea2 = page.locator('div[data-sentry-component="Text"]').nth(4);

  }

  async getQrUrl_1() {
    await this.qrArea1.scrollIntoViewIfNeeded();
    await this.qrArea1.waitFor({ state: "visible" });

    if((await this.qrImage1.count()) === 0){
      await this.page.screenshot();
      throw new Error("❌QR code for this license is missing.");
    }

    const src = await this.qrImage1.getAttribute("src");
    return decodeURIComponent(
      new URLSearchParams(src.split("?")[1]).get("text")
    );
  }

  async verifyQrRedirect_1() {
    const qrUrl = await this.getQrUrl_1();
    await this.page.goto(qrUrl);
    await this.page.waitForURL(/apps\.apple\.com/);
  }

  async getQrUrl_2() {
    await this.qrArea2.scrollIntoViewIfNeeded();
    await this.qrArea2.waitFor({ state: "visible" });

    if ( (await this.qrImage2.count()) === 0) {
      await this.page.screenshot()
      throw new Error("❌QR code for this license is missing.");
    }
    const src = await this.qrImage2.getAttribute("src");
    return decodeURIComponent(
      new URLSearchParams(src.split("?")[1]).get("text")
    );
  }

  async verifyQrRedirect_2() {
    const qrUrl = await this.getQrUrl_2();
    await this.page.goto(qrUrl);
    await this.page.waitForURL(/apps\.apple\.com/);
  }
}