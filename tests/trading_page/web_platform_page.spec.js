import { test, expect } from "@playwright/test";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import { WebPlatformPage } from "../../pages/tradingSection/WebPlatformPage";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHT", "IT", "NL", "PL"];
// const languages = ["RO"]

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;

    test(`${license.name} ${lang} – Web Platform, Create account`, async ({
      page,
    }) => {
      const path = license.paths[lang]; 

      await page.goto(path, { waitUntil: "domcontentloaded" });      

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const webPlatformPage = new WebPlatformPage(page);

      await tradingMenu.openWebPlatformPage();

      const expectedPath = `${path}/trading-platforms/web-platform`;

      await expect(page).toHaveURL(expectedPath);
      await webPlatformPage.clickCreateAccountButton();
    });

    test.skip(`${license.name} ${lang} – Web Platform, Verify QR Code`, async ({
      page,
    }) => {
      const path = license.paths[lang];

      await page.goto(path, { waitUntil: "domcontentloaded" });     

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const webPlatformPage = new WebPlatformPage(page);    

      await tradingMenu.openWebPlatformPage();

      const expectedPath = `${path}/trading-platforms/web-platform`;

      await expect(page).toHaveURL(expectedPath);
      await webPlatformPage.verifyQrRedirect();
    });

  })
})
