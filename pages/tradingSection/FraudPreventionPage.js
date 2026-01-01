import { handleCookiesPopUp, handleModalWindowSignUp, handleStayOnSitePopUp } from "../../helpers/pop_ups";
export class FraudPreventionPage{
    constructor(page){
        this.page = page;
    }

     async clickCreateYourAccountButtonFromReady() {         
            await this.page.getByText("Ready to join a leading broker?").scrollIntoViewIfNeeded({timeout:1000});       
            await handleCookiesPopUp(this.page);
            await handleStayOnSitePopUp(this.page);       
            await this.page.locator('[data-type="banner_with_steps"]').click();
            await handleModalWindowSignUp(this.page)
          }
    }
