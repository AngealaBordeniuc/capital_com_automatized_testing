import { expect } from "allure-playwright";
import { handleCookiesPopUp, handleStayOnSitePopUp } from "../../helpers/pop_ups";

export class AboutSectionMenu {
  constructor(page) {
    this.page = page;
  }

  async openAboutSubMenu(linkName) {
    // Hover pe About ca să deschidem submeniul
    const aboutMenu = this.page.getByRole("link", { name: "About" }).first();
    await aboutMenu.hover();

    // Selectăm subLink-ul dorit
    const subLink = this.page.getByRole("link", { name: linkName }).first();

    // Click JS-level pentru stabilitate în CI/headless
    const handle = await subLink.elementHandle();
    if (handle) {
      await this.page.evaluate((el) => el.click(), handle);
    } else {
      throw new Error(`Linkul "${linkName}" nu a fost găsit!`);
    }

    // Așteptăm pagina să se încarce
    await this.page.waitForLoadState("domcontentloaded");

    // const header = this.page.locator("#header");
    // const aboutMenu = this.page.getByRole("link", { name: "About" }).first();

    // await this.page.waitForTimeout(1000);
    // await handleCookiesPopUp(this.page);
    // await handleStayOnSitePopUp(this.page);

    // await aboutMenu.hover({ force: true, timeout: 300 });

    // const subLink = header.getByRole("link", { name: linkName });
    // await expect(subLink).toBeVisible({ timeout: 5000 });
    // await expect(subLink).toBeEnabled();
    // await subLink.waitFor({ state: "attached" });
    // await subLink.click();

    // await this.page.waitForLoadState("domcontentloaded");
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

    //  const link = this.page
    //    .locator('a[href="/en-gb/help/client-vulnerability"]')
    //    .first();

    //  await link.waitFor({ state: "attached", timeout: 10000 });

    //  // click JS-level (stabil în CI)
    //  await this.page.evaluate((el) => el.click(), await link.elementHandle());

    //  await this.page.waitForLoadState("domcontentloaded");

    // caută link după text, nu după href fix

    
    // const link = this.page
    //   .getByRole("link", { name: "Client vulnerability" })
    //   .first();

    // // așteaptă să fie în DOM
    // await link.waitFor({ state: "attached", timeout: 10000 });

    // // click JS-level (stabil în CI, headless)
    // const handle = await link.elementHandle();
    // if (handle) {
    //   await this.page.evaluate((el) => el.click(), handle);
    // } else {
    //   throw new Error("Linkul Client vulnerability nu a fost găsit!");
    // }

    // // așteaptă să se încarce pagina
    // await this.page.waitForLoadState("domcontentloaded");
  }
}