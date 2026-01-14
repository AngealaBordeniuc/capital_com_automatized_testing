import { expect } from "allure-playwright";
import {handleOptionalPopups, handleCookiesPopUp, handleStayOnSitePopUp } from "../../helpers/pop_ups";

export class AboutSectionMenu {
  constructor(page) {
    this.page = page;
  }

  async openAboutSubMenu({ aboutText, subMenuText }) {
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: aboutText }).first();

    await aboutMenu.hover({ force: true });
    const subLink = header.getByRole("link", { name: subMenuText }).first();


    await subLink.waitFor({ state: "attached", timeout: 10000 });
    // click JS-level (stabil în CI/headless)
    const handle = await subLink.elementHandle();
    if (handle) {
      await this.page.evaluate((el) => el.click(), handle);
    } else {
      throw new Error(`Linkul ${subMenuText} nu a fost găsit!`);
    }

    await this.page.waitForLoadState("domcontentloaded");
  }

  // async openAboutSubMenu(linkName) {
  //     const header = this.page.locator("#header");
  //     const aboutMenu = this.page.getByRole("link", { name: "About" }).first();

  //     // Hover pe About pentru a deschide submeniul
  //     await aboutMenu.hover({ force: true, timeout: 1000 });

  //     // așteaptă eventualele popups
  //     // await handleOptionalPopups(this.page);

  //     const subLink = header.getByRole("link", { name: linkName }).first();

  //     // așteaptă să fie în DOM
  //     await subLink.waitFor({ state: "attached", timeout: 10000 });

  //     // click JS-level (stabil în CI/headless)
  //     const handle = await subLink.elementHandle();
  //     if (handle) {
  //       await this.page.evaluate((el) => el.click(), handle);
  //     } else {
  //       throw new Error(`Linkul ${linkName} nu a fost găsit!`);
  //     }

  //     // așteaptă să se încarce pagina complet
  //     await this.page.waitForLoadState("domcontentloaded");
  // }

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

  // async openComplaintsPage() {
  //   await this.openAboutSubMenu("Complaints");
  // }

  async openComplaintsPage(aboutText, subMenuText) {
    await this.openAboutSubMenu({aboutText, subMenuText});
  }

  // async openClientVulnerabilityPage() {
  //   await this.openAboutSubMenu("Client vulnerability");
  // }

  async openClientVulnerability(aboutText, subMenuText) {
    await this.openAboutSubMenu({
      aboutText,
      subMenuText,
    });
  }
}