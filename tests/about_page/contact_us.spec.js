import {test, expect} from '@playwright/test'
import { handleCookiesPopUp, handleModalWindowSignUp, handleStayOnSitePopUp } from '../../helpers/pop_ups';
import { AboutSectionMenu } from '../../pages/aboutSection/AboutSectionMenu';
import { ContactUsPage } from '../../pages/aboutSection/ContactUsPage';

let aboutSectionMenu;
let contactUsPage;

test.describe("Smoke_FCA_license(EN), Contact Us", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en-gb");
    await handleStayOnSitePopUp(page);
    aboutSectionMenu = new AboutSectionMenu(page);
    contactUsPage = new ContactUsPage(page);
    await aboutSectionMenu.openContactUsPage();
  });

  test("FCA_License, Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user", async ({
    page,
  }) => {    
    await expect(page).toHaveURL("/en-gb/contact-us");
    await contactUsPage.clickCreateYourAccountButtonFromReady();    
  });
});

    test.describe("Smoke_SCA_license(EN), Contact Us", () => {
      test.beforeEach(async ({ page }) => {
        await page.goto("/en-ae");
        await handleStayOnSitePopUp(page);
        aboutSectionMenu = new AboutSectionMenu(page);
        contactUsPage = new ContactUsPage(page);
         await aboutSectionMenu.openContactUsPage();
      });

      test("Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user", async ({
        page,
      }) => {       
        await expect(page).toHaveURL("/en-ae/contact-us");
        await contactUsPage.clickCreateYourAccountButtonFromReady();      
      });
    });
