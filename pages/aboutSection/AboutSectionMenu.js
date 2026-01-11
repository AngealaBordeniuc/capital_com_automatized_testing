import { expect } from "allure-playwright";

export class AboutSectionMenu {
  constructor(page) {
    this.page = page;
  }

  async openAboutSubMenu(linkName) {
    await this.page.waitForSelector("#header", {
      state: "visible",
      timeout: 5000,
    });

    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "About" }).first();
    await aboutMenu.waitFor({ state: "visible", timeout: 5000 });
    await aboutMenu.hover();

    const subLink = header.getByRole("link", { name: linkName });
    await expect(subLink).toBeVisible({ timeout: 5000 });    
    await subLink.click();    
    await this.page.waitForLoadState("domcontentloaded");
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