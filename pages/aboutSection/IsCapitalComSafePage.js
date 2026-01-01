export class IsCapitalComSafePage{
    constructor(page){
        this.page = page
    }

    async clickOpenAnAccountButton(){
        await this.page.getByRole("button", { name: "Open an account" }).click();
    }

}