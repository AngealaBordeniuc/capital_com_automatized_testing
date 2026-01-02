import { handleCookiesPopUp, handleStayOnSitePopUp } from "../../helpers/pop_ups";

export class AboutSectionMenu {
  constructor(page) {
    this.page = page;
  }

  async openWhyCapitalComPage() {
    await this.page.waitForTimeout(1000)
    await handleStayOnSitePopUp(this.page);
    await handleCookiesPopUp(this.page);    
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "About" }).first();      
    await aboutMenu.hover();           
    await this.page.click('a:has-text("Why Capital.com?")');
  }

  async openOurOfficesPage() {
     await handleStayOnSitePopUp(this.page);
     await handleCookiesPopUp(this.page)
     await this.page.waitForTimeout(5000)
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "About" }).first();        
    await handleStayOnSitePopUp(this.page);
        await aboutMenu.hover();      

    await this.page.click('a:has-text("Our offices")');
  }

  async openIsCapitalComSafePage() {
     await this.page.waitForTimeout(5000);    
    await handleStayOnSitePopUp(this.page);
    await handleCookiesPopUp(this.page);   
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "About" }).first();
    await aboutMenu.hover();   
    await this.page.click('a:has-text("Is capital.com safe?")');
  }

  async openInvestorRelationsPage() {
    await this.page.waitForTimeout(5000);
    await handleStayOnSitePopUp(this.page);
    await handleCookiesPopUp(this.page); 
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "About" }).first();
    await aboutMenu.hover();    
    await this.page.click('a:has-text("Investor Relations")');
  }
  async openHelpPage() {
    // await handleCookiesPopUp(this.page);
    // await handleStayOnSitePopUp(this.page);
    await this.page.waitForTimeout(5000);
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "About" }).first()        
    await handleStayOnSitePopUp(this.page);
    
    await aboutMenu.hover();
    await this.page.click('a:has-text("Help")');
  }

  async openContactUsPage() {
    //  await handleCookiesPopUp(this.page);
    //  await handleStayOnSitePopUp(this.page);
     await this.page.waitForTimeout(5000);
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "About" }).first();
    await handleStayOnSitePopUp(this.page);

    await aboutMenu.hover();   
    await this.page.click('a:has-text("Contact us")');
  }

  async openComplaintsPage() {
    await this.page.waitForTimeout(5000);
    await handleStayOnSitePopUp(this.page);
    await handleCookiesPopUp(this.page); 
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "About" }).first();
    await aboutMenu.hover();    
    await this.page.click('a:has-text("Complaints")');
  }

  async openClientVulnerabilityPage() {
    await this.page.waitForTimeout(5000);
    await handleStayOnSitePopUp(this.page);
    await handleCookiesPopUp(this.page); 
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "About" }).first();
    await aboutMenu.hover();   
    await this.page.click('a:has-text("Client vulnerability")');
  }
}