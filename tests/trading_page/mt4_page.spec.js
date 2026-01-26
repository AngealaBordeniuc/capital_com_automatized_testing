// import {test, expect} from '@playwright/test'
// import { handleCookiesPopUp, handleStayOnSitePopUp, handleModalWindowSignUp } from '../../helpers/pop_ups'
// import { TradingSectionMenu } from '../../pages/tradingSection/TradingSectionMenu'
// import { MT4Page } from '../../pages/tradingSection/MT4Page'

// let tradingSectionMenu;
// let mT4Page;

// test.describe('CySec_License(EN), MT4 Page', () => {
//     test.beforeEach(async({page}) => {
//             await page.goto('/en-eu')
//             await handleStayOnSitePopUp(page)
//             await handleCookiesPopUp(page)
//             tradingSectionMenu = new TradingSectionMenu(page)
//             mT4Page = new MT4Page(page)
//             await tradingSectionMenu.openMT4Page();
//         })
    
//  test('CySEC_license(EN), Sign Up Form is opened on "MT4" page after clicking "Create account" button, unauthorized user', 
//   async ({page}) => {      
//        await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");
//        await mT4Page.clickCreateAccountButton();     
//      });       
 
//  test('CySEC_license(EN), Sign Up Form is opened after clicking "Open account" button from the "Connect your account to MT4 in three steps" block, unauthorized user', 
//   async ({page}) => {      
//        await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");
//        await mT4Page.clickOpenAccountButton();      
//      })

//   test('CySEC_license(EN), Sign Up Form is opened after clicking "Create account" button from the "Connect your account to MT4 in three steps" block, unauthorized user', 
//     async ({page}) => {       
//        await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");
//        await mT4Page.clickCreateAccountButton2();      
//      });

//  test('CySEC_license(EN), Verify Mt4 Download For Mac from the "Download MT4" block, unauthorized user', 
//   async ({page}) => {   
//    await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");
//    await mT4Page.verifyMt4DownloadForMac();
//  });

//   test('CySEC_license(EN), Verify Mt4 Download For Windows from the "Download MT4" block, unauthorized user', 
//     async ({page}) => {    
//     await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");
//     await mT4Page.verifyMt4DownloadForWindows();
//   });

//   test('CySEC_license(EN), Verify Mt4 Download Google Play from the "Download MT4" block, unauthorized user', 
//     async ({page}) => {    
//     await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");
//     await mT4Page.verifyMt4DownloadGooglePlay();
//   });

//  test('CySEC_license(EN), Verify Mt4 Download App Store from the "Download MT4" block, unauthorized user', 
//   async ({page}) => {   
//    await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");   
//    await mT4Page.verifyMt4DownloadAppStore();
//  }); 

//  test('CySEC_license(EN), Verify Web Terminal from the "Download MT4" block, unauthorized user', async ({
//    page,
//  }) => {   
//    await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");  
//    await mT4Page.verifyMt4OpenWebTerminal();
//  }); 

//   test('CySEC_license(EN), Sign Up form is opened after clicking on [Sign Up], unauthorized user', 
//     async ({page}) => {    
//     await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");    
//     await mT4Page.clickSignUpButtonWhyChooseCapital();   
//   }); 

//    test("CySEC_License(EN),Sign Up Form is opened after clicking on the [Create your account] button, unauthorized user", 
//      async ({page}) => {   
//     await expect(page).toHaveURL("/en-eu/trading-platforms/mt4");        
//      await mT4Page.clickCreateYourAccountButtonFromReady();                          
//  });

// });  

import { test, expect } from "@playwright/test";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import { MT4Page } from "../../pages/tradingSection/MT4Page";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHS", "ZHT", "IT", "NL", "PL"];
// const languages = ["RO"]

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;
    if (!license.tradingSubmenus.MT4 ||
      !license.tradingSubmenus.MT4.includes(lang) ||
      !license.features.mt4CreateAccountButton ||
      !license.features.mt4OpenAccountButton)
      return;

    

    test(`${license.name} ${lang} – MT4: Create account - un`, async ({
      page, 
    }) => {      

      const path = license.paths[lang];     

      // await page.pause()

      await page.goto(path, {waitUntil: "domcontentloaded"});

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const mT4Page = new MT4Page(page);

      await tradingMenu.openMT4Page()
    
      const expectedPath = `${path}/trading-platforms/mt4`;

      await expect(page).toHaveURL(expectedPath);
      await mT4Page.clickCreateAccountButton()
    });

    
    test(`${license.name} ${lang} – MT4: Open account - un`, async ({
      page,
    }) => {
      const path = license.paths[lang];

      // await page.pause()

      await page.goto(path, { waitUntil: "domcontentloaded" });

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const mT4Page = new MT4Page(page);

      await tradingMenu.openMT4Page();

      const expectedPath = `${path}/trading-platforms/mt4`;

      await expect(page).toHaveURL(expectedPath);
      await mT4Page.clickOpenAccountButton()
    });

      test(`${license.name} ${lang} – MT4, Create account: Three Steps - un`, async ({
        page,
      }) => {
        const path = license.paths[lang];

        // await page.pause()

        await page.goto(path, { waitUntil: "domcontentloaded" });

        await handleOptionalPopups(page);

        const tradingMenu = new TradingSectionMenu(page);
        const mT4Page = new MT4Page(page);

        await tradingMenu.openMT4Page();

        const expectedPath = `${path}/trading-platforms/mt4`;

        await expect(page).toHaveURL(expectedPath);
        await mT4Page.clickCreateAccountButtonThreeSteps()
      });

  })
})

