import { test, expect } from "@playwright/test";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import { AllPlatformsPage } from "../../pages/tradingSection/AllPlatformsPage";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHS", "ZHT", "IT", "NL", "PL"];

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;

    test(`${license.name} ${lang} – All Platforms: Create Account - un`, async ({
      page,
    }) => {
      const path = license.paths[lang];

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const allPlatformsPage = new AllPlatformsPage(page);

      await tradingMenu.openAllPlatformsPage();
    
      const expectedPath = `${path}/trading-platforms`;

      await expect(page).toHaveURL(expectedPath);
      await allPlatformsPage.clickCreateAccountButton()
    });

    test(`${license.name} ${lang} – All Platforms: Try demo account - un`, async ({
      page,
    }) => {
      const path = license.paths[lang];   

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const allPlatformsPage = new AllPlatformsPage(page);

      await tradingMenu.openAllPlatformsPage();

      const expectedPath = `${path}/trading-platforms`;

      await expect(page).toHaveURL(expectedPath);
      await allPlatformsPage.clickTryDemoAccountButton()
    });

    test(`${license.name} ${lang} – All Platforms: Sign up - un`, async ({
      page,
    }) => {
      const path = license.paths[lang];

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const allPlatformsPage = new AllPlatformsPage(page);

      await tradingMenu.openAllPlatformsPage();

      const expectedPath = `${path}/trading-platforms`;

      await expect(page).toHaveURL(expectedPath);
      await allPlatformsPage.clickSignUpButtonWhyChooseCapital()
    });
  });
});

