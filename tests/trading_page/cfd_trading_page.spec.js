import { test, expect } from "@playwright/test";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import {CFDTradingPage} from"../../pages/tradingSection/CFDTradingPage";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";
import { threeStepsToStartTrading } from "../../helpers/threeSteps";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHT", "IT", "NL", "PL"];
// const languages = ["IT"]

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;

    test(`${license.name} ${lang} – CFD Trading: Explore Markets`, async ({
      page
    }, testInfo) => {
      const userState = testInfo.project.name;      
      const path = license.paths[lang];

      await page.goto(path, {
        waitUntil: "domcontentloaded",
      });      
      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const cfdTradingPage = new CFDTradingPage(page);

      await tradingMenu.openCFDTradingPage()
    
      const expectedPath = `${path}/ways-to-trade/cfd-trading`;

      await expect(page).toHaveURL(expectedPath);
      await cfdTradingPage.clickExploreMarketsButton(userState);
    });  

     
     test(`${license.name} ${lang} – CFD Trading: Sell`, async ({
       page,
     }, testInfo) => {
      const userState = testInfo.project.name;
      const path = license.paths[lang];  

      await page.goto(path, {
        waitUntil: "domcontentloaded",
      });    

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const cfdTradingPage = new CFDTradingPage(page);

      await tradingMenu.openCFDTradingPage();

      const expectedPath = `${path}/ways-to-trade/cfd-trading`;

      await expect(page).toHaveURL(expectedPath);
      await cfdTradingPage.clickSellButtonOurCFDMarkets(userState)
    });

      test(`${license.name} ${lang} – CFD Trading: Buy`, async ({
        page,
      }, testInfo) => {
        const userState = testInfo.project.name;
        const path = license.paths[lang];

        await page.goto(path, {
          waitUntil: "domcontentloaded",
        });

        await handleOptionalPopups(page);

        const tradingMenu = new TradingSectionMenu(page);
        const cfdTradingPage = new CFDTradingPage(page);

        await tradingMenu.openCFDTradingPage();

        const expectedPath = `${path}/ways-to-trade/cfd-trading`;

        await expect(page).toHaveURL(expectedPath);
        await cfdTradingPage.clickBuyButtonOurCFDMarkets(userState);
      });      

        test(`${license.name} ${lang} – CFD Trading: Verify QR Code`, async ({
          page,
        }, testInfo) => {
          const userState = testInfo.project.name;
          const path = license.paths[lang];

          await page.goto(path, {
            waitUntil: "domcontentloaded",
          });

          await handleOptionalPopups(page);

          const tradingMenu = new TradingSectionMenu(page);
          const cfdTradingPage = new CFDTradingPage(page);

          await tradingMenu.openCFDTradingPage();

          const expectedPath = `${path}/ways-to-trade/cfd-trading`;

          await expect(page).toHaveURL(expectedPath);
          await cfdTradingPage.verifyQrRedirect(userState);
        });

        test(`${license.name} ${lang} – CFD Trading: Three steps to get started`, async ({
          page,
        }, testInfo) => {
          const userState = testInfo.project.name;
          const path = license.paths[lang];

          await page.goto(path, {
            waitUntil: "domcontentloaded",
          });

          await handleOptionalPopups(page);

          const tradingMenu = new TradingSectionMenu(page);
          const cfdTradingPage = new CFDTradingPage(page);

          await tradingMenu.openCFDTradingPage();

          const expectedPath = `${path}/ways-to-trade/cfd-trading`;

          await expect(page).toHaveURL(expectedPath);          
          await threeStepsToStartTrading(page, userState);
        });
  })
})