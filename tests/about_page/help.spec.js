import {test, expect} from "@playwright/test"
import { AboutSectionMenu } from '../../pages/aboutSection/AboutSectionMenu';
import { HelpPage } from '../../pages/aboutSection/HelpPage';

let aboutSectionMenu;
let helpPage;

test.describe("Smoke_FCA_license(EN), Help", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en-gb");
    await page.waitForLoadState('domcontentloaded');  
    aboutSectionMenu = new AboutSectionMenu(page);
    helpPage = new HelpPage(page);
      await aboutSectionMenu.openHelpPage();
  });

  test("Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user", async ({
    page,
  }) => {  
    await expect(page).toHaveURL("/en-gb/help");
    await helpPage.clickCreateYourAccountButtonFromReady();   
  });
});

    test.describe("Smoke_SCA_License(EN), Help", () => {
      test.beforeEach(async ({ page }) => {
        await page.goto("/en-ae", {waitUntil: "domcontentloaded"});                     
        aboutSectionMenu = new AboutSectionMenu(page);
        helpPage = new HelpPage(page);
        await aboutSectionMenu.openHelpPage();
      });

      test("Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user", async ({
        page,
      }) => {    
        await expect(page).toHaveURL("/en-ae/help");
        await helpPage.clickCreateYourAccountButtonFromReady();       
      });
    });
