// import{test, expect} from "@playwright/test"
// import { AboutSectionMenu } from '../../pages/aboutSection/AboutSectionMenu';
// import { WhyCapitalComPage } from '../../pages/aboutSection/WhyCapitalComPage';
// import { handleOptionalPopups } from "../../helpers/pop_ups";


// let aboutSectionMenu;
// let whyCapitalComPage;

// test.describe('Smoke_FCA_license(EN), Why Capital.com?', ( ) => {
//     test.beforeEach(async({page})=> {      
//          await page.goto("/en-gb", {waitUntil: "domcontentloaded"});                             
        
//           aboutSectionMenu = new AboutSectionMenu(page);
//           whyCapitalComPage = new WhyCapitalComPage(page);
//          await aboutSectionMenu.openWhyCapitalComPage();  
//     })

//     test('FCA_license,Sign Up Form is opened on "Why Capital.com" page after clicking "Create account" button, unauthorized user', async({page}) => {      
                  
//       await expect(page).toHaveURL("/en-gb/why-capital");
//       await whyCapitalComPage.clickCreateAccountButton();      
//     })

//     test('FCA_License, Sign Up Form is opened on "Why Capital.com" page after clicking "Try demo account" button, unauthorized user', async ({page}) => {
              
//          await expect(page).toHaveURL("/en-gb/why-capital");
//          await whyCapitalComPage.clickTryDemoAccountButton()                
//     })

//      test('FCA_License, Sign Up Form is opened on "Why Capital.com" page after clicking "Create your account" button, unauthorized user', async ({
//        page,
//      }) => {
      
//        await expect(page).toHaveURL("/en-gb/why-capital");       
//        await whyCapitalComPage.clickCreateYourAccountButtonFromReady()                   
//      });
// })

// test.describe('Smoke_FCA_license(EN), Why Capital.com?', ( ) => {
//     test.beforeEach(async({page})=> {
//       await page.pause()
//          await page.goto("/en-ae", {waitUntil: "domcontentloaded"});                  

//           aboutSectionMenu = new AboutSectionMenu(page);
//           whyCapitalComPage = new WhyCapitalComPage(page);
//             await aboutSectionMenu.openWhyCapitalComPage();
//     })

//      test('SCA_License(EN), Sign Up Form is opened on "Why Capital.com" page after clicking "Create account" button, unauthorized user', async ({
//        page,
//      }) => {
      
//        await expect(page).toHaveURL("/en-ae/why-capital");
//        await whyCapitalComPage.clickCreateAccountButton();    
//      });

     
//     test('SCA_License(EN), Sign Up Form is opened on "Why Capital.com" page after clicking "Try demo account" button, unauthorized user', async ({
//       page,
//     }) => {
      
//       await expect(page).toHaveURL("/en-ae/why-capital");
//       await whyCapitalComPage.clickTryDemoAccountButton();
//     });

//     test('SCA_License(EN), Sign Up Form is opened on "Why Capital.com" page after clicking "Create your account" button, unauthorized user', async ({
//       page,
//     }) => {
    
//       await expect(page).toHaveURL("/en-ae/why-capital");
//       await whyCapitalComPage.clickCreateYourAccountButtonFromReady();     
//     });

//   })

import { test, expect } from "@playwright/test";
import { AboutSectionMenu } from "../../pages/aboutSection/AboutSectionMenu";
import { WhyCapitalComPage } from "../../pages/aboutSection/WhyCapitalComPage";
import { aboutMenuTexts } from "../../test-data/about-menu-texts";
import { licenses } from "../../test-data/licenses";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU"];

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;
    // if (!license.aboutSubmenus.includes("CONTACT_US")) return;

    test(`${license.name} ${lang} – Why Capital Com?, "Create your account" - un`, async ({ page }) => {
      const path = license.paths[lang];

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      const aboutMenu = new AboutSectionMenu(page);
      const whyCapitalComPage = new WhyCapitalComPage(page)

      await aboutMenu.openWhyCapitalComPage(
        aboutMenuTexts.ABOUT[lang],
        aboutMenuTexts.WHY_CAPITAL_COM[lang]
      );

      const expectedPath = `${path}/why-capital`;

      await expect(page).toHaveURL(expectedPath);
      await whyCapitalComPage.clickCreateYourAccountButtonFromReady();
    });

     test(`${license.name} ${lang} – Why Capital Com?, "Create account" - un`, async ({
       page,
     }) => {
       const path = license.paths[lang];

       await page.goto(`https://capital.com${path}`, {
         waitUntil: "domcontentloaded",
       });

       const aboutMenu = new AboutSectionMenu(page);
       const whyCapitalComPage = new WhyCapitalComPage(page);

       await aboutMenu.openWhyCapitalComPage(
         aboutMenuTexts.ABOUT[lang],
         aboutMenuTexts.WHY_CAPITAL_COM[lang]
       );

       const expectedPath = `${path}/why-capital`;

       await expect(page).toHaveURL(expectedPath);
       await whyCapitalComPage.clickCreateAccountButton()
     });

        test.only(`${license.name} ${lang} – Why Capital Com?, "Try demo account" - un`, async ({
          page,
        }) => {
          const path = license.paths[lang];

          await page.goto(`https://capital.com${path}`, {
            waitUntil: "domcontentloaded",
          });

          const aboutMenu = new AboutSectionMenu(page);
          const whyCapitalComPage = new WhyCapitalComPage(page);

          await aboutMenu.openWhyCapitalComPage(
            aboutMenuTexts.ABOUT[lang],
            aboutMenuTexts.WHY_CAPITAL_COM[lang]
          );

          const expectedPath = `${path}/why-capital`;

          await expect(page).toHaveURL(expectedPath);
          await whyCapitalComPage.clickTryDemoAccountButton()
        });


  });
});





