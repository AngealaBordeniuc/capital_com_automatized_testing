import { handleModalWindowSignUp} from "../../helpers/pop_ups";

export class IsCapitalComSafePage{
    constructor(page){
        this.page = page
    }

    async clickOpenAnAccountButton(){  
    // const openAccountBtn = this.page.locator("text=/open an account/i").first();

      const openAccountBtn = this.page
        .locator(`
    a[href*="sign-up"],
    a[href*="signup"],
    button[class*="signup"],
    button[data-type*="signup"]`).first();
    
     await openAccountBtn.waitFor({ state: "visible", timeout: 40000 });

     await Promise.all([
       this.page.waitForLoadState("domcontentloaded"),
       openAccountBtn.click({ force: true }),
     ]);   

     await handleModalWindowSignUp(this.page)
    }

}