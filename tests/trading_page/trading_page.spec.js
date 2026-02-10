import { test, expect } from "@playwright/test";
import { TradingPage } from "../../pages/tradingSection/TradingPage";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHT", "IT", "NL", "PL"];
// const languages = ["EN"]

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;
    
    test(`${license.name} ${lang} – Trading Page, Create account - un`, async ({
          page,
        }) => {
          const path = license.paths[lang]; 
    
          await page.goto(path, { waitUntil: "domcontentloaded" });      
    
          await handleOptionalPopups(page);         

          const tradingPage = new TradingPage(page);

          await tradingPage.openTradingPage();

          const expectedPath = `${path}/ways-to-trade`;

          await expect(page).toHaveURL(expectedPath);
          await tradingPage.clickCreateAccountButton()
        });

     test.only(`${license.name} ${lang} – Trading Page, Try demo account - un`, async ({
           page,
         }) => {
           const path = license.paths[lang];

           await page.goto(path, { waitUntil: "domcontentloaded" });

           await handleOptionalPopups(page);

           const tradingPage = new TradingPage(page);

           await tradingPage.openTradingPage();

           const expectedPath = `${path}/ways-to-trade`;

           await expect(page).toHaveURL(expectedPath);
           await tradingPage.clickTryDemoAccountButton();
         });

})
})




