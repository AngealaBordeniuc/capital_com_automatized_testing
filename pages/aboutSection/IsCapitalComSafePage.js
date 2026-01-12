import { handleModalWindowSignUp, handleOptionalPopups } from "../../helpers/pop_ups";

export class IsCapitalComSafePage{
    constructor(page){
        this.page = page
    }

    async clickOpenAnAccountButton(){
        await handleOptionalPopups(this.page)
       const openAccountBtn = this.page.getByRole("button", { name: "Open an account" });
       await openAccountBtn.waitFor({ state: "attached", timeout: 40000 });
       await openAccountBtn.waitFor({ state: "visible", timeout: 40000 });
         await openAccountBtn.click();
         await handleModalWindowSignUp(this.page)
    }

}