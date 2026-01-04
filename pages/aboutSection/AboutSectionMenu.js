import { expect } from "allure-playwright";
import { handleCookiesPopUp, handleStayOnSitePopUp } from "../../helpers/pop_ups";

export class AboutSectionMenu {
  constructor(page) {
    this.page = page;
  }

  async openWhyCapitalComPage() {    
    // // Wait for the header to be visible before proceeding
    await this.page.waitForTimeout(2000);
    await handleStayOnSitePopUp(this.page);
    await handleCookiesPopUp(this.page);
    await this.page.waitForSelector("#header", {
      state: "visible",
      timeout: 10000,
    });

    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "About" }).first();

    await aboutMenu.waitFor({ state: "visible", timeout: 10000 });
    await aboutMenu.hover({force: true, timeout: 5000});

    // Wait for the Why Capital.com submenu link to appear before clicking
    const whyLink = header.getByRole("link", { name: "Why Capital.com?" });   
    await expect(whyLink).toBeVisible({ timeout: 10000 });
    await whyLink.click();    
  }

  async openOurOfficesPage() {
    await this.page.waitForTimeout(2000);
     await handleStayOnSitePopUp(this.page);
     await handleCookiesPopUp(this.page)   
     await this.page.waitForSelector("#header", {
        state: "visible",
        timeout: 10000,
      });
    const header = this.page.locator("#header");
    await handleStayOnSitePopUp(this.page);
    const aboutMenu = header.getByRole("link", { name: "About" }).first();           

    await aboutMenu.waitFor({ state: "visible", timeout: 10000 });
    await aboutMenu.hover({force: true, timeout: 5000});    

    const ourOfficesLink = header.getByRole("link", { name: "Our offices" })    
    await expect(ourOfficesLink).toBeVisible({ timeout: 10000 });    
    await ourOfficesLink.click();   
  }

  async openIsCapitalComSafePage() {      
    await this.page.waitForTimeout(2000);
    await handleStayOnSitePopUp(this.page);
    await handleCookiesPopUp(this.page);   

    await this.page.waitForSelector("#header", {state: "visible", timeout: 10000,});    

    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "About" }).first();
    await aboutMenu.waitFor({ state: "visible", timeout: 10000 });
    await aboutMenu.hover({force: true, timeout: 5000});   

    const isCapitalComSafeLink = header.getByRole("link", { name: "Is capital.com safe?" });
    await expect(isCapitalComSafeLink).toBeVisible({ timeout: 10000 });
    await isCapitalComSafeLink.click();
   
  }

  async openInvestorRelationsPage() {
    await this.page.waitForTimeout(2000);
   
    await handleStayOnSitePopUp(this.page);
    await handleCookiesPopUp(this.page); 

    await this.page.waitForSelector("#header", {state: "visible", timeout: 10000,});
    const header = this.page.locator("#header");

    const aboutMenu = header.getByRole("link", { name: "About" }).first();
    await aboutMenu.waitFor({ state: "visible", timeout: 10000 });
    await aboutMenu.hover();        

    const investorRelationsLink = header.getByRole("link", { name: "Investor Relations" });
    await expect(investorRelationsLink).toBeVisible({ timeout: 10000 });    
    await investorRelationsLink.click();
  }

  async openHelpPage() {
     await this.page.waitForTimeout(2000);
    await handleCookiesPopUp(this.page);
    await handleStayOnSitePopUp(this.page);

    await this.page.waitForSelector("#header", { state: "visible", timeout: 10000, });
   
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "About" }).first()        
    await aboutMenu.waitFor({ state: "visible", timeout: 10000 });

    await handleStayOnSitePopUp(this.page);    
    await aboutMenu.hover();

    const helpLink = header.getByRole("link", { name: "Help" });
    await expect(helpLink).toBeVisible({ timeout: 10000 });
    await helpLink.click();
  }
    

  async openContactUsPage() {
     await this.page.waitForTimeout(2000);
     await handleCookiesPopUp(this.page);
     await handleStayOnSitePopUp(this.page);
     await this.page.waitForSelector("#header", { state: "visible", timeout: 10000,});
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "About" }).first();
    await handleStayOnSitePopUp(this.page);
    await aboutMenu.waitFor({ state: "visible", timeout: 10000 });
    await aboutMenu.hover();   

    const contactUsLink = header.getByRole("link", { name: "Contact us" });
    await expect(contactUsLink).toBeVisible({ timeout: 10000 });
    await contactUsLink.click();   
  }

  async openComplaintsPage() {    
    await this.page.waitForTimeout(2000);
    await handleStayOnSitePopUp(this.page);
    await handleCookiesPopUp(this.page); 
    await this.page.waitForSelector("#header", {state: "visible", timeout: 10000,});
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "About" }).first();
    await aboutMenu.waitFor({ state: "visible", timeout: 10000 });
    await aboutMenu.hover();    

    const complaintsLink = header.getByRole("link", { name: "Complaints" });
    await expect(complaintsLink).toBeVisible({ timeout: 10000 });    
    await complaintsLink.click();
  }  

  async openClientVulnerabilityPage() {   
      await this.page.waitForTimeout(2000);
    await handleStayOnSitePopUp(this.page);
    await handleCookiesPopUp(this.page); 
    await this.page.waitForSelector("#header", {state: "visible", timeout: 10000,});
    const header = this.page.locator("#header");
    const aboutMenu = header.getByRole("link", { name: "About" }).first();
    await aboutMenu.waitFor({ state: "visible", timeout: 10000 });
    await aboutMenu.hover();   

    const clientVulnerabilityMenu = header.getByRole("link", { name: "Client vulnerability" });
    await expect(clientVulnerabilityMenu).toBeVisible({ timeout: 10000 });    
    await clientVulnerabilityMenu.click();   
  }
}