import { test, expect } from "@playwright/test";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import {DemoTradingPage} from"../../pages/tradingSection/DemoTradingPage";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

const languages = ["EN", "FR", "DE", "AR", "RU", "ZHS", "ZHT", "IT", "NL", "PL"];
// const languages = ["AR"]

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;
    if (!license.tradingSubmenus.includes("DEMO_TRADING")) return;

    test(`${license.name} ${lang} – Demo Trading: Try demo - un`, async ({
      page,
    }) => {
      const path = license.paths[lang];           

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const demoTradingPage = new DemoTradingPage(page);

      await tradingMenu.openDemoTradingPage()
      const expectedPath = `${path}/trading-platforms/demo-account`;

      await expect(page).toHaveURL(expectedPath);
      await demoTradingPage.clickTryDemoButton()
    });

     test(`${license.name} ${lang} – Demo Trading: Verify QR code- un`, async ({
       page,
     }) => {
       const path = license.paths[lang];     

       await page.goto(`https://capital.com${path}`, {
         waitUntil: "domcontentloaded",
       });

       await handleOptionalPopups(page);

       const tradingMenu = new TradingSectionMenu(page);
       const demoTradingPage = new DemoTradingPage(page);

       await tradingMenu.openDemoTradingPage();
       const expectedPath = `${path}/trading-platforms/demo-account`;

       await expect(page).toHaveURL(expectedPath);
       await demoTradingPage.verifyQrRedirect()
     });

    test(`${license.name} ${lang} – Demo Trading: Create your account - un`, async ({
      page,
    }) => {
      const path = license.paths[lang];
      

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const demoTradingPage = new DemoTradingPage(page);

      await tradingMenu.openDemoTradingPage();
      const expectedPath = `${path}/trading-platforms/demo-account`;

      await expect(page).toHaveURL(expectedPath);
      await demoTradingPage.clickCreateYourAccountButtonFromReady()
    });

  })
})
