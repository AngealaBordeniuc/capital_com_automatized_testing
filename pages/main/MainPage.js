import { expect } from "allure-playwright";
import { handleModalWindowSignUp } from "../../helpers/pop_ups";

export class MainPage {
  constructor(page) {
    this.page = page;
  }
  async clickCTA(locator){       
    await locator.scrollIntoViewIfNeeded();
    await expect(locator).toBeVisible({ timeout: 10000 });
    await locator.click();
  }


  async clickSignUpButton() {      
  //  const signUpBtn = this.page.getByRole("button", { name: "Sign up" }).nth(1);
  const signUpBtn = this.page.locator(`button[data-type*="btn1_signup"]`).first()
   await this.clickCTA(signUpBtn)  
   await handleModalWindowSignUp(this.page);
  }

  async clickTryDemoButton() {   
    // const tryDemoBtn = this.page.locator("#bannerHomePage").getByRole("button", { name: "Try demo" });
    const tryDemoBtn = this.page.locator(`button[data-type*="btn2_demo"]`);
    await this.clickCTA(tryDemoBtn)   
    await handleModalWindowSignUp(this.page);
  }

  async clickSignUpButtonWhyChooseCapitalCom() {        
    const signUpBtnWhyChoose = this.page.locator(`button[data-type*="btn2_signup"]`)
    await this.clickCTA(signUpBtnWhyChoose)   
    await handleModalWindowSignUp(this.page);
  }

  async clickSellButtonOurMarkets() {
    const sellBtnOurMarkets = this.page.locator(`a[data-type*="sell_btn"]`);
    await this.clickCTA(sellBtnOurMarkets)    
     await expect(this.page).toHaveURL("/trading/platform/charting");
     await this.page.locator('input[type="email"]').waitFor();
  }

  async clickBuyButtonOutMarkets() {
    const buyBtnOurMarkets = this.page.locator(`a[data-type*="buy_btn"]`);
    await this.clickCTA(buyBtnOurMarkets)
     await expect(this.page).toHaveURL("/trading/platform/charting");
     await this.page.locator('input[type="email"]').waitFor();
  }

  async clickTryDemoButtonForLearnerTraders() {    
    const tryDemoBtnLearner = this.page.locator(`button[data-type="learn_traders_block_btn_demo"]`);
    await this.clickCTA(tryDemoBtnLearner)   
    await handleModalWindowSignUp(this.page);
  }

  async clickSignUpButtonForLearnerTraders() {           
    const signUpBtnLearner = this.page.locator(`button[data-type="learn_traders_block_btn1_signup"]`);
    await this.clickCTA(signUpBtnLearner)   
    await handleModalWindowSignUp(this.page);
  }

  async clickCreateYourAccountButtonFromReady() { 
    const bannerBtnReady = this.page.locator('[data-type="banner_with_steps"]');
    await this.clickCTA(bannerBtnReady)    
    await handleModalWindowSignUp(this.page);
  }
}