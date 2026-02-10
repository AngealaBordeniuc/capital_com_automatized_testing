import { test, expect } from "@playwright/test";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import { TradingViewPage } from "../../pages/tradingSection/TradingViewPage";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

// const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHT", "IT", "NL", "PL"];
const languages = ["EN"]

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;

    test(`${license.name} ${lang} – Trading View, Download for Desktop - un`, async ({
      page,
    }) => {
      const path = license.paths[lang]; 

      await page.goto(path, { waitUntil: "domcontentloaded" });      

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const tradingViewPage = new TradingViewPage(page);

      await tradingMenu.openTradingViewPage()

      const expectedPath = `${path}/trading-platforms/trading-view`;

      await expect(page).toHaveURL(expectedPath);
      await tradingViewPage.verifyDownloadForDesktop();
    });

    test(`${license.name} ${lang} – Trading View, Download for MacOs - un`, async ({
      page,
    }) => {
      const path = license.paths[lang];

      await page.goto(path, { waitUntil: "domcontentloaded" });     

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const tradingViewPage = new TradingViewPage(page);

      await tradingMenu.openTradingViewPage();

      const expectedPath = `${path}/trading-platforms/trading-view`;

      await expect(page).toHaveURL(expectedPath);
      await tradingViewPage.verifyDownloadForMacOs()
    });

    test(`${license.name} ${lang} – Trading View, Download for Linux - un`, async ({
      page,
    }) => {
      const path = license.paths[lang];

      await page.goto(path, { waitUntil: "domcontentloaded" });

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const tradingViewPage = new TradingViewPage(page);

      await tradingMenu.openTradingViewPage();

      const expectedPath = `${path}/trading-platforms/trading-view`;

      await expect(page).toHaveURL(expectedPath);
      await tradingViewPage.verifyDownloadForLinux();
    });

    test(`${license.name} ${lang} – Trading View, Launch Browser - un`, async ({
      page,
    }) => {
      const path = license.paths[lang];

      await page.goto(path, { waitUntil: "domcontentloaded" });      

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const tradingViewPage = new TradingViewPage(page);

      await tradingMenu.openTradingViewPage();

      const expectedPath = `${path}/trading-platforms/trading-view`;

      await expect(page).toHaveURL(expectedPath);
      await tradingViewPage.verifyLaunchBrowser();
    });

     test(`${license.name} ${lang} – Trading View, Trading View Link - un`, async ({
       page,
     }) => {
       const path = license.paths[lang];

       await page.goto(path, { waitUntil: "domcontentloaded" });

      //  await page.pause();

       await handleOptionalPopups(page);

       const tradingMenu = new TradingSectionMenu(page);
       const tradingViewPage = new TradingViewPage(page);

       await tradingMenu.openTradingViewPage();

       const expectedPath = `${path}/trading-platforms/trading-view`;

       await expect(page).toHaveURL(expectedPath);
       await tradingViewPage.clickTradingViewLink()
     });

      test(`${license.name} ${lang} – Trading View, Sign Up: How can I connect TradingView? - un`, async ({
        page,
      }) => {
        const path = license.paths[lang];

        await page.goto(path, { waitUntil: "domcontentloaded" });
        
        await handleOptionalPopups(page);

        const tradingMenu = new TradingSectionMenu(page);
        const tradingViewPage = new TradingViewPage(page);

        await tradingMenu.openTradingViewPage();

        const expectedPath = `${path}/trading-platforms/trading-view`;

        await expect(page).toHaveURL(expectedPath);
        await tradingViewPage.clickSignUpHowCanButton()
      });

       test.skip(`${license.name} ${lang} – Trading View, Sign Up: Why choose Capital.com? - un`, async ({
         page,
       }) => {
         const path = license.paths[lang];

         await page.goto(path, { waitUntil: "domcontentloaded" });

        // await page.pause();

         await handleOptionalPopups(page);

         const tradingMenu = new TradingSectionMenu(page);
         const tradingViewPage = new TradingViewPage(page);

         await tradingMenu.openTradingViewPage();

         const expectedPath = `${path}/trading-platforms/trading-view`;

         await expect(page).toHaveURL(expectedPath);
         await tradingViewPage.clickSignUpWhyChooseButton()
       });

  })
})

