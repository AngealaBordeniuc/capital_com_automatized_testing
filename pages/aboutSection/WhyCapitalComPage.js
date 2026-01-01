export class WhyCapitalComPage{
    constructor(page){
        this.page = page
    }

    async clickCreateAccountButton(){
        await this.page.getByRole("button", { name: "Create account" }).click();
    }

    async clickTryDemoAccountButton(){
        await this.page.getByRole("button", { name: "Try demo account" }).click();
    }

    async clickCreateYourAccountButtonFromReady(){
        await this.page.getByText("Ready to join a leading broker?").scrollIntoViewIfNeeded();
        await this.page.locator('[data-type="banner_with_steps"]').click(); 

    }

}