import { test, expect } from "@playwright/test";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import { MobileAppsPage } from "../../pages/tradingSection/MobileAppsPage";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHS", "ZHT", "IT", "NL", "PL"];
// const languages = ["RO"]

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;

    test(`${license.name} ${lang} – Mobile Apps, QR Code: CFD trading app - un`, async ({
      page,
    }) => {
      const path = license.paths[lang]; 

      await page.goto(path, { waitUntil: "domcontentloaded" });

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const mobileAppsPage = new MobileAppsPage(page);

      await tradingMenu.openMobileAppsPage();

      const expectedPath = `${path}/trading-platforms/mobile-apps`;

      await expect(page).toHaveURL(expectedPath);
      await mobileAppsPage.verifyQrRedirect_1();
    });

    test(`${license.name} ${lang} – Mobile Apps, QR Code: Investmate - un`, async ({
      page,
    }) => {
      const path = license.paths[lang];

      // await page.pause()      

      await page.goto(path, { waitUntil: "domcontentloaded" });
      
      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const mobileAppsPage = new MobileAppsPage(page);

      await tradingMenu.openMobileAppsPage();

      const expectedPath = `${path}/trading-platforms/mobile-apps`;

      await expect(page).toHaveURL(expectedPath);
      await mobileAppsPage.verifyQrRedirect_2();
    });

  })
})
