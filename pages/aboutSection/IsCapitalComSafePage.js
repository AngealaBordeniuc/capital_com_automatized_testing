import { handleModalWindowSignUp} from "../../helpers/modal_SignUp";

export class IsCapitalComSafePage{
    constructor(page){
        this.page = page
    }

    async clickOpenAnAccountButton(){  
    const openAccountBtn = this.page
        .locator(`
    a[href*="sign-up"],
    a[href*="signup"],
    button[class*="signup"],
    button[data-type*="signup"]`).first();
    
     await openAccountBtn.waitFor({ state: "visible", timeout: 40000 });

     await Promise.all([
       this.page.waitForLoadState("domcontentloaded"),
       openAccountBtn.click(),
     ]);   

     await handleModalWindowSignUp(this.page, "/trading/platform/");
    }

}