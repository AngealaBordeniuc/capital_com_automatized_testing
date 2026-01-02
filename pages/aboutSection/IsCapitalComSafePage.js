export class IsCapitalComSafePage{
    constructor(page){
        this.page = page
    }

    async clickOpenAnAccountButton(){
       const openAccountBtn = page.getByRole("button", { name: "Open an account" });
       await openAccountBtn.waitFor({ state: "visible", timeout: 10000 });
         await openAccountBtn.click();
    }

}