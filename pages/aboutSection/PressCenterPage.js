import {clickCta} from "../../helpers/cta";
import {handleModalWindowSignUp} from "../../helpers/modal_SignUp";

export class PressCenterPage {
  constructor(page) {
    this.page = page;
  }

  async clickMostTradedButton(userState){
    const tradeBtn = this.page.locator('[data-type="wdg_most_traded_btn"]').first();
    await clickCta(tradeBtn);
    await handleModalWindowSignUp(this.page, userState);
  }
}