export class MobileAppsPage {
  constructor(page) {
    this.page = page;
    this.qrImage1 = page.getByRole("img", { name: "QR code" }).first()
    this.qrImage2 = page.getByRole("img", { name: "QR code" }).nth(1);
  }

  async getQrUrl_1() {
    await this.qrImage1.scrollIntoViewIfNeeded();
    await this.qrImage1.waitFor({ state: "visible" });
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
    await this.qrImage2.scrollIntoViewIfNeeded();
    await this.qrImage2.waitFor({ state: "visible" });
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