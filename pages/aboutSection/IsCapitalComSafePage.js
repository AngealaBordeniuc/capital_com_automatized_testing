import { handleModalWindowSignUp, handleOptionalPopups } from "../../helpers/pop_ups";

export class IsCapitalComSafePage{
    constructor(page){
        this.page = page
    }

    async clickOpenAnAccountButton(){  
    const openAccountBtn = this.page.locator("text=/open an account/i").first();
     await openAccountBtn.waitFor({ state: "visible", timeout: 40000 });

     await Promise.all([
       this.page.waitForLoadState("domcontentloaded"),
       openAccountBtn.click({ force: true }),
     ]);   

     await handleModalWindowSignUp(this.page)
    }

}