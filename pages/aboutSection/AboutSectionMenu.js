import { expect } from "allure-playwright";
import { handleCookiesPopUp, handleStayOnSitePopUp } from "../../helpers/pop_ups";

export class AboutSectionMenu {
  constructor(page) {
    this.page = page;
  }

  async openAboutSubMenu(linkName) {    
    await this.page.waitForTimeout(2000);
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);
    await this.page.waitForSelector("#header", {
      state: "visible",
      timeout: 10000,
    });

    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "About" }).first();
    await aboutMenu.waitFor({ state: "visible", timeout: 10000 });
    await aboutMenu.hover({ force: true, timeout: 5000 });

    const subLink = header.getByRole("link", { name: linkName });
    await expect(subLink).toBeVisible({ timeout: 10000 });
    await subLink.click();
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