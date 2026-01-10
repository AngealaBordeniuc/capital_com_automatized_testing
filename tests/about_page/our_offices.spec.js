import {test, expect} from '@playwright/test'
import { handleCookiesPopUp, handleStayOnSitePopUp } from '../../helpers/pop_ups';
import { AboutSectionMenu } from '../../pages/aboutSection/AboutSectionMenu';
import { OurOfficesPage } from '../../pages/aboutSection/OurOfficesPage';

let aboutSectionMenu;
let ourOfficesPage;

test.describe("Smoke_FCA_license(EN),Is Capital.com safe?", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en-gb");   
    await page.waitForLoadState('domcontentloaded');
    await handleStayOnSitePopUp(page);
    await handleCookiesPopUp(page);
    aboutSectionMenu = new AboutSectionMenu(page);
    ourOfficesPage = new OurOfficesPage(page);
    await aboutSectionMenu.openOurOfficesPage();
  });

  test("FCA_License(EN), Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user", async ({
    page,
  }) => {  
    
      await expect(page).toHaveURL(
        "/en-gb/about-us/our-offices"
      )
    await ourOfficesPage.clickCreateYourAccountButtonFromReady();    
  });
});

test.describe("Smoke_SCA_license(EN),Is Capital.com safe?", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en-ae"); 
    await page.waitForLoadState('domcontentloaded');
    await handleStayOnSitePopUp(page);
    await handleCookiesPopUp(page);
    aboutSectionMenu = new AboutSectionMenu(page);
    ourOfficesPage = new OurOfficesPage(page);
     await aboutSectionMenu.openOurOfficesPage();
  });

  test("SCA_License(EN), Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user", async ({
    page,
  }) => {   
    await expect(page).toHaveURL("/en-ae/about-us/our-offices");
    await ourOfficesPage.clickCreateYourAccountButtonFromReady();   
  });
});




