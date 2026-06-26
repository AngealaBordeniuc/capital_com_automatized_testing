import {handleModalWindowSignUp} from "../../helpers/modal_SignUp";
import {threeStepsToStartTrading} from "../../helpers/threeSteps";

export class HelpPage {
  constructor(page) {
    this.page = page;
  }

  async clickThreeStepsHelpCenter(userState) {   
    await threeStepsToStartTrading(this.page, userState);
    //  const bannerBtnReady = this.page.locator(
    //    '[data-type="banner_with_steps"]'
    //  );
    //  await bannerBtnReady.waitFor({ state: "attached", timeout: 40000 });
    //  await bannerBtnReady.scrollIntoViewIfNeeded();
    //  await bannerBtnReady.waitFor({ state: "visible", timeout: 40000 });
    //  await bannerBtnReady.click();
    //  await handleModalWindowSignUp(this.page, "/trading/platform/");
  }
  }

