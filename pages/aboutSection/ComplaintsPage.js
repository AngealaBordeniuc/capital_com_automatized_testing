import {
  handleCookiesPopUp,
  handleStayOnSitePopUp,
  handleModalWindowSignUp,
} from "../../helpers/pop_ups";

export class ComplaintsPage {
  constructor(page) {
    this.page = page;
  }

  async clickCreateYourAccountButtonFromReady() {
    const bannerBtnReady = this.page.locator('[data-type="banner_with_steps"]');
    await bannerBtnReady.scrollIntoViewIfNeeded();
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);
    await bannerBtnReady.click({ force: true });
    await handleModalWindowSignUp(this.page)
  }
}
