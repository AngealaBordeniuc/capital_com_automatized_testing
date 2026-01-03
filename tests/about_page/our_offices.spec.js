import {test, expect} from '@playwright/test'
import { handleModalWindowSignUp, handleStayOnSitePopUp } from '../../helpers/pop_ups';
import { AboutSectionMenu } from '../../pages/aboutSection/AboutSectionMenu';
import { OurOfficesPage } from '../../pages/aboutSection/OurOfficesPage';

let aboutSectionMenu;
let ourOfficesPage;

test.describe("Smoke_FCA_license(EN),Is Capital.com safe?", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en-gb");
    await handleStayOnSitePopUp(page);
    aboutSectionMenu = new AboutSectionMenu(page);
    ourOfficesPage = new OurOfficesPage(page);
  });

  test("FCA_License(EN), Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user", async ({
    page,
  }) => {  
    await aboutSectionMenu.openOurOfficesPage()
      await expect(page).toHaveURL(
        "/en-gb/about-us/our-offices"
      )
    await ourOfficesPage.clickCreateYourAccountButtonFromReady();
    await handleModalWindowSignUp(page);
  });
});

test.describe("Smoke_SCA_license(EN),Is Capital.com safe?", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en-ae");
    await handleStayOnSitePopUp(page);
    aboutSectionMenu = new AboutSectionMenu(page);
    ourOfficesPage = new OurOfficesPage(page);
  });

  test("SCA_License(EN), Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user", async ({
    page,
  }) => {
    await aboutSectionMenu.openOurOfficesPage()
    await expect(page).toHaveURL("/en-ae/about-us/our-offices");
    await ourOfficesPage.clickCreateYourAccountButtonFromReady();
    await handleModalWindowSignUp(page);
  });
});




