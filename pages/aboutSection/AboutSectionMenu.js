import { expect } from "allure-playwright";
import { handleCookiesPopUp, handleStayOnSitePopUp } from "../../helpers/pop_ups";

export class AboutSectionMenu {
  constructor(page) {
    this.page = page;
  }

  async openAboutSubMenu(linkName) {   
    const header = this.page.locator("#header");
    const aboutMenu = this.page.getByRole("link", { name: "About" }).first();

    await this.page.waitForTimeout(1000);
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);

    await aboutMenu.hover({ force: true, timeout: 300 });

    const subLink = header.getByRole("link", { name: linkName });    
    await expect(subLink).toBeVisible({ timeout: 5000 });
    await expect(subLink).toBeEnabled();
    await subLink.waitFor({ state: "attached" });  
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

    // const header = this.page.locator("#header");
    // const aboutMenu = this.page.getByRole("link", { name: "About" }).first();
    // await this.page.waitForTimeout(1000);
    // await handleCookiesPopUp(this.page);
    // await handleStayOnSitePopUp(this.page);

    // await expect(aboutMenu).toBeVisible({ timeout: 5000 });

    // await aboutMenu.hover();

    // const subLink = header.getByRole("link", { name: "Client vulnerability" });

    // // 4️⃣ Așteptăm să fie vizibil efectiv
    // await expect(subLink).toBeVisible({ timeout: 5000 });

    // await expect(subLink).toBeEnabled();
    // await subLink.waitFor({ state: "attached" });

    // // 5️⃣ Click pe linkul vizibil
    // await subLink.click({ force: true });

    // await this.page.waitForLoadState("domcontentloaded");
  }
}