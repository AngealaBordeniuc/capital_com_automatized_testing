import { test, expect } from "@playwright/test";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import { KnockOutsPage } from "../../pages/tradingSection/KnockOutsPage";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";
import { threeStepsToStartTrading } from "../../helpers/threeSteps";


const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHT", "IT", "NL", "PL"];
// const languages = ["IT"]

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;
    if (!license.tradingSubmenus.KNOCK_OUTS) return;

    test(`${license.name} ${lang} – Knock-Outs: Access`, async ({
      page
    }, testInfo) => {
      const userState = testInfo.project.name;      
      const path = license.paths[lang];

      await page.goto(path, {
        waitUntil: "domcontentloaded",
      });      
      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const knockOutsPage = new KnockOutsPage(page);

      await tradingMenu.openKnockOutsPage()
    
      const expectedPath = `${path}/ways-to-trade/knock-outs`;

      await expect(page).toHaveURL(expectedPath);
      await knockOutsPage.clickAccessKnockOutsButton(userState);
    });

    test(`${license.name} ${lang} – Put Button`, async ({
      page,
    }, testInfo) => {
      const userState = testInfo.project.name;
      const path = license.paths[lang];

      await page.goto(path, {
        waitUntil: "domcontentloaded",
      });
      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const knockOutsPage = new KnockOutsPage(page);

      await tradingMenu.openKnockOutsPage();

      const expectedPath = `${path}/ways-to-trade/knock-outs`;

      await expect(page).toHaveURL(expectedPath);
      await knockOutsPage.clickPutButton(userState);
    });

     test(`${license.name} ${lang} – Call Button`, async ({
       page,
     }, testInfo) => {
       const userState = testInfo.project.name;
       const path = license.paths[lang];

       await page.goto(path, {
         waitUntil: "domcontentloaded",
       });
       await handleOptionalPopups(page);

       const tradingMenu = new TradingSectionMenu(page);
       const knockOutsPage = new KnockOutsPage(page);

       await tradingMenu.openKnockOutsPage();

       const expectedPath = `${path}/ways-to-trade/knock-outs`;

       await expect(page).toHaveURL(expectedPath);
       await knockOutsPage.clickCallButton(userState);
     });

     test(`${license.name} ${lang} – Verify QR Redirect`, async ({
       page
     }) => {       
       const path = license.paths[lang];

       await page.goto(path, {
         waitUntil: "domcontentloaded",
       });
       await handleOptionalPopups(page);

       const tradingMenu = new TradingSectionMenu(page);
       const knockOutsPage = new KnockOutsPage(page);

       await tradingMenu.openKnockOutsPage();

       const expectedPath = `${path}/ways-to-trade/knock-outs`;

       await expect(page).toHaveURL(expectedPath);
       await knockOutsPage.verifyQrRedirect();
     });

       test(`${license.name} ${lang} – Three Steps to Start Trading`, async ({
         page,
       }, testInfo) => {
         const userState = testInfo.project.name;
         const path = license.paths[lang];

         await page.goto(path, {
           waitUntil: "domcontentloaded",
         });
         await handleOptionalPopups(page);

         const tradingMenu = new TradingSectionMenu(page);
         const knockOutsPage = new KnockOutsPage(page);

         await tradingMenu.openKnockOutsPage();

         const expectedPath = `${path}/ways-to-trade/knock-outs`;

         await expect(page).toHaveURL(expectedPath);
         await threeStepsToStartTrading(page, userState);
       });

});
});