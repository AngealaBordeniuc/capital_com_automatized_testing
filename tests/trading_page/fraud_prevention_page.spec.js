import { test, expect } from "@playwright/test";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import { FraudPreventionPage } from "../../pages/tradingSection/FraudPreventionPage";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHS", "ZHT", "IT", "NL", "PL"];
// const languages = ["ZHS"]

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;

    test(`${license.name} ${lang} – Fraud Prevention: Create your account - un`, async ({
      page,
    }) => {
      const path = license.paths[lang];       

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const fraudPreventionPage = new FraudPreventionPage(page);

      await tradingMenu.openFraudPreventionPage()
    
      const expectedPath = `${path}/ways-to-trade/fraud-awareness`;

      await expect(page).toHaveURL(expectedPath);
      await fraudPreventionPage.clickCreateYourAccountButtonFromReady()
    });

  })
})