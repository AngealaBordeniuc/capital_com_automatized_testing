import { handleCookiesPopUp, handleModalWindowSignUp, handleStayOnSitePopUp } from "../../helpers/pop_ups";
export class MarginCallsPage {
  constructor(page) {
    this.page = page;
  }

  async clickCreateYourAccountButtonFromReady() {
    const bannerBtnReady = this.page.locator('[data-type="banner_with_steps"]');
    await bannerBtnReady.scrollIntoViewIfNeeded();  
    await bannerBtnReady.click({ force: true });
  }
}