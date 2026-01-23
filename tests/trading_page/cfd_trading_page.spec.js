import { test, expect } from "@playwright/test";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import {CFDTradingPage} from"../../pages/tradingSection/CFDTradingPage";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHS", "ZHT", "IT", "NL", "PL"];
// const languages = ["IT"]

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;

    test(`${license.name} ${lang} – CFD Trading: Create Account - un`, async ({
      page,
    }) => {
      const path = license.paths[lang];     

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const cfdTradingPage = new CFDTradingPage(page);

      await tradingMenu.openCFDTradingPage()
    
      const expectedPath = `${path}/ways-to-trade/cfd-trading`;

      await expect(page).toHaveURL(expectedPath);
      await cfdTradingPage.clickCreateAccountButton()
    });

     test(`${license.name} ${lang} – CFD Trading: Try demo - un`, async ({
       page,
     }) => {
       const path = license.paths[lang];
       await page.goto(`https://capital.com${path}`, {
         waitUntil: "domcontentloaded",
       });

       await handleOptionalPopups(page);

       const tradingMenu = new TradingSectionMenu(page);
       const cfdTradingPage = new CFDTradingPage(page);

       await tradingMenu.openCFDTradingPage();

       const expectedPath = `${path}/ways-to-trade/cfd-trading`;

       await expect(page).toHaveURL(expectedPath);
       await cfdTradingPage.clickTryDemoAccountButton();
     });

     
     test(`${license.name} ${lang} – CFD Trading: Sell - un`, async ({
       page,
     }) => {
       const path = license.paths[lang];  

       await page.goto(`https://capital.com${path}`, {
         waitUntil: "domcontentloaded",
       });

       await handleOptionalPopups(page);

       const tradingMenu = new TradingSectionMenu(page);
       const cfdTradingPage = new CFDTradingPage(page);

       await tradingMenu.openCFDTradingPage();

       const expectedPath = `${path}/ways-to-trade/cfd-trading`;

       await expect(page).toHaveURL(expectedPath);
       await cfdTradingPage.clickSellButtonOurCFDMarkets()
     });

      test(`${license.name} ${lang} – CFD Trading: Buy - un`, async ({
        page,
      }) => {
        const path = license.paths[lang];

        await page.goto(`https://capital.com${path}`, {
          waitUntil: "domcontentloaded",
        });

        await handleOptionalPopups(page);

        const tradingMenu = new TradingSectionMenu(page);
        const cfdTradingPage = new CFDTradingPage(page);

        await tradingMenu.openCFDTradingPage();

        const expectedPath = `${path}/ways-to-trade/cfd-trading`;

        await expect(page).toHaveURL(expectedPath);
        await cfdTradingPage.clickBuyButtonOurCFDMarkets();
      });

       test(`${license.name} ${lang} – CFD Trading: Create your account - un`, async ({
         page,
       }) => {
         const path = license.paths[lang];       

         await page.goto(`https://capital.com${path}`, {
           waitUntil: "domcontentloaded",
         });

         await handleOptionalPopups(page);

         const tradingMenu = new TradingSectionMenu(page);
         const cfdTradingPage = new CFDTradingPage(page);

         await tradingMenu.openCFDTradingPage();

         const expectedPath = `${path}/ways-to-trade/cfd-trading`;

         await expect(page).toHaveURL(expectedPath);
         await cfdTradingPage.clickCreateYourAccountButtonFromReady()
       });

  })
})