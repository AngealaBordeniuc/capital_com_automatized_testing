 import { handleStayOnSitePopUp, handleCookiesPopUp } from "../../helpers/pop_ups";
 export class AllPlatformsPage {
  constructor(page) {
    this.page = page;
  }

  async clickCreateAccountButton() {
    await this.page.getByRole("button", { name: "Create account" }).click();
  }
  async clickTryDemoAccountButton() {
    await this.page.getByRole("button", { name: "Try demo account" }).click();
  }

  async clickSignUpButtonWhyChooseCapital() {
      await handleCookiesPopUp(this.page);
      await handleStayOnSitePopUp(this.page);
      await this.page.getByRole("button", { name: "Sign up", exact: true }).scrollIntoViewIfNeeded();   
      await this.page.getByRole("button", { name: "Sign up", exact:true }).click();
    }
}