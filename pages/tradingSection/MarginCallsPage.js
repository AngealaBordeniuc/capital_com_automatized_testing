import { handleModalWindowSignUp} from "../../helpers/modal_SignUp";
export class MarginCallsPage {
  constructor(page) {
    this.page = page;
  }

  async clickCreateYourAccountButtonFromReady() {
    const bannerBtnReady = this.page.locator('[data-type="banner_with_steps"]');
    await bannerBtnReady.scrollIntoViewIfNeeded();  
    await bannerBtnReady.click();
    await handleModalWindowSignUp(this.page, "/trading/platform/");
  }
}