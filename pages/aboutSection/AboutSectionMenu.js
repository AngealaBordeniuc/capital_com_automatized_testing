import { expect } from "allure-playwright";
import {
  handleOptionalPopups,
  handleCookiesPopUp,
  handleStayOnSitePopUp,
} from "../../helpers/pop_ups";
import { ABOUT_MENU } from "../../test-data/about-menu";

export class AboutSectionMenu {
  constructor(page) {
    this.page = page;
  }

  //   async openAboutSubMenu({ subMenuText }) {
  //   const header = this.page.locator("#header");

  //   const aboutMenu = header.locator(
  //     'a[href$="/about-us"]'
  //   );

  //   await aboutMenu.hover({ force: true });

  //   const subLink = header.getByRole("link", { name: subMenuText });

  //   await subLink.waitFor({ state: "visible", timeout: 10000 });
  //   await subLink.click();

  //   await this.page.waitForLoadState("domcontentloaded");
  // }

  // async openAboutSubMenu({ subMenuText }) {
  //   const header = this.page.locator("#header");

  //   const aboutMenu = this.page.locator('a[href$="/about-us"]').first();

  //   await aboutMenu.hover({ force: true });

  //   const subLink = header.getByRole("link", { name: subMenuText });

  //   await subLink.waitFor({ state: "visible", timeout: 10000 });
  //   await subLink.click();

  //   await this.page.waitForLoadState("domcontentloaded");
  // }

  async openAboutSubMenu(menuKey) {
    const header = this.page.locator("#header");

    const aboutMenu = header.locator('a[href$="/about-us"]').first();
    await aboutMenu.hover({ force: true });

    const subLink = header.locator(`a[href*="${ABOUT_MENU[menuKey]}"]`).first();

    await subLink.waitFor({ state: "visible", timeout: 10000 });
    await subLink.click();

    await this.page.waitForLoadState("domcontentloaded");
  }

  async openClientVulnerability() {
    await this.openAboutSubMenu("CLIENT_VULNERABILITY");
  }
  async openComplaintsPage() {
    await this.openAboutSubMenu("COMPLAINTS");
  }

  async openContactUsPage() {
    await this.openAboutSubMenu("CONTACT_US");
  }
  async openHelpPage() {
    await this.openAboutSubMenu("HELP");
  }
  async openInvestorRelationsPage() {
    await this.openAboutSubMenu("INVESTOR_RELATIONS");
  }

  async openIsCapitalComSafePage() {
    await this.openAboutSubMenu("IS_CAPITAL_COM_SAFE");
  }
  async openOurOfficesPage() {
    await this.openAboutSubMenu("OUR_OFFICES");
  }

  async openWhyCapitalComPage() {
    await this.openAboutSubMenu("WHY_CAPITAL_COM");
  }
}