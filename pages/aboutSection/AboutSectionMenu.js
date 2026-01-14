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

 

  async openWhyCapitalComPage() {
    await this.openAboutSubMenu("Why Capital.com?");
  }

  async openOurOfficesPage() {
    await this.openAboutSubMenu("Our offices");
  }

  async openIsCapitalComSafePage(aboutText, subMenuText) {
    await this.openAboutSubMenu({ aboutText, subMenuText });
  }

  async openInvestorRelationsPage(aboutText, subMenuText) {
    await this.openAboutSubMenu({ aboutText, subMenuText });
  }

  async openHelpPage(aboutText, subMenuText) {
    await this.openAboutSubMenu({ aboutText, subMenuText });
  }
  
  async openContactUsPage(aboutText, subMenuText) {
    await this.openAboutSubMenu({ aboutText, subMenuText });
  }

  async openComplaintsPage(aboutText, subMenuText) {
    await this.openAboutSubMenu({ aboutText, subMenuText });
  }

  async openClientVulnerability(aboutText, subMenuText) {
    await this.openAboutSubMenu({
      aboutText,
      subMenuText,
    });
  }
}