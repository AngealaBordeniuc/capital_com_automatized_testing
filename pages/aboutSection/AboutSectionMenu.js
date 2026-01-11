import { expect } from "allure-playwright";

export class AboutSectionMenu {
  constructor(page) {
    this.page = page;
  }

  async openAboutSubMenu(linkName) {
    if (this.page.isClosed()) {
      throw new Error("Page is closed before opening About submenu");
    }

    const header = this.page.locator("#header");
    await header.waitFor({ state: "visible", timeout: 5000 });

    const aboutMenu = header.getByRole("link", { name: "About" }).first();
    await aboutMenu.hover();

    const subLink = header.getByRole("link", { name: linkName });
    await subLink.waitFor({ state: "visible", timeout: 5000 });

    await subLink.click();
    await this.page.waitForLoadState("domcontentloaded");

    if (this.page.isClosed()) {
      throw new Error(`Page closed after clicking About → ${linkName}`);
    }
  }

  async openWhyCapitalComPage() {
    await this.openAboutSubMenu("Why Capital.com?");
  }

  async openOurOfficesPage() {
    await this.openAboutSubMenu("Our offices");
  }

  async openIsCapitalComSafePage() {
    await this.openAboutSubMenu("Is capital.com safe?");
  }

  async openInvestorRelationsPage() {
    await this.openAboutSubMenu("Investor Relations");
  }

  async openHelpPage() {
    await this.openAboutSubMenu("Help");
  }

  async openContactUsPage() {
    await this.openAboutSubMenu("Contact us");
  }

  async openComplaintsPage() {
    await this.openAboutSubMenu("Complaints");
  }

  async openClientVulnerabilityPage() {
    await this.openAboutSubMenu("Client vulnerability");
  }
}