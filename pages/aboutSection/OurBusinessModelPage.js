import {clickCta} from "../../helpers/cta";
import {handleModalWindowSignUp} from "../../helpers/modal_SignUp";
import {threeStepsToStartTrading} from "../../helpers/threeSteps";

export class OurBusinessModelPage {
  constructor(page) {
    this.page = page;
  }

  async clickOpenAnAccountOurBusinessModel(userState) {
    const openAccountBtn = this.page
      .locator(`
    a[href*="sign-up"],
    a[href*="signup"],
    button[class*="signup"],
    button[data-type*="signup"]`).first();
    await clickCta(openAccountBtn);
    await handleModalWindowSignUp(this.page, userState);
  }

  async  clickThreeStepsOurBusinessModel(userState) {
    await threeStepsToStartTrading(this.page, userState);
  }


}