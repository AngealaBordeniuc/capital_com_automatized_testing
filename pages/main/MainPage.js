import { expect } from "allure-playwright";
import { handleCookiesPopUp, handleStayOnSitePopUp, handleModalWindowSignUp } from "../../helpers/pop_ups";

export class MainPage {
  constructor(page) {
    this.page = page;
  }
  async clickCTA(locator){
      await this.page.waitForTimeout(1000);

      await handleCookiesPopUp(this.page);
      await handleStayOnSitePopUp(this.page);

      await locator.scrollIntoViewIfNeeded();
      await expect(locator).toBeVisible({ timeout: 10000 });

      await locator.click();

  }


  async clickSignUpButton() {      
   const signUpBtn = this.page.getByRole("button", { name: "Sign up" }).nth(1);
   await this.clickCTA(signUpBtn)  
   await handleModalWindowSignUp(this.page);
  }

  async clickTryDemoButton() {   
    const tryDemoBtn = this.page.locator("#bannerHomePage").getByRole("button", { name: "Try demo" });
    await this.clickCTA(tryDemoBtn)   
    await handleModalWindowSignUp(this.page);
  }

  async clickSignUpButtonWhyChooseCapitalCom() {    
    const signUpBtnWhyChoose = this.page.getByRole("button", { name: "Sign up" }).nth(2);
    await this.clickCTA(signUpBtnWhyChoose)   
    await handleModalWindowSignUp(this.page);
  }

  async clickSellButtonOurMarkets() {
    const sellBtnOurMarkets = this.page.getByRole("link", { name: "Sell" });
    await this.clickCTA(sellBtnOurMarkets)    
     await expect(this.page).toHaveURL("/trading/platform/charting");
     await this.page.locator('input[type="email"]').waitFor();
  }

  async clickBuyButtonOutMarkets() {
    const buyBtnOurMarkets = this.page.getByRole("link", { name: "Buy" });
    await this.clickCTA(buyBtnOurMarkets)
     await expect(this.page).toHaveURL("/trading/platform/charting");
     await this.page.locator('input[type="email"]').waitFor();
  }

  async clickTryDemoButtonForLearnerTraders() {
    const tryDemoBtnLearner = this.page.getByRole("button", { name: "Try demo" }).nth(1)
    await this.clickCTA(tryDemoBtnLearner)   
    await handleModalWindowSignUp(this.page);
  }

  async clickSignUpButtonForLearnerTraders() {       
    const signUpBtnLearner = this.page.getByRole("button", { name: "Sign up" }).nth(3);
    await this.clickCTA(signUpBtnLearner)   
    await handleModalWindowSignUp(this.page);
  }

  async clickCreateYourAccountButtonFromReady() { 
    const bannerBtnReady = this.page.locator('[data-type="banner_with_steps"]');
    await this.clickCTA(bannerBtnReady)    
    await handleModalWindowSignUp(this.page);
  }
}