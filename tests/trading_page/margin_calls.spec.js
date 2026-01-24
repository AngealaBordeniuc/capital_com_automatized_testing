import { test, expect } from "@playwright/test";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import {MarginCallsPage} from"../../pages/tradingSection/MarginCallsPage";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHS", "ZHT", "IT", "NL", "PL"];
// const languages = ["RO"]

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;

    test(`${license.name} ${lang} – Margin Calls: Create your account - un`, async ({
      page,
    }) => {
      const path = license.paths[lang];     

    //   await page.pause()

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const marginCallsPage = new MarginCallsPage(page);

      await tradingMenu.openMarginCallsPage()
    
      const expectedPath = `${path}/ways-to-trade/margin-calls`;

      await expect(page).toHaveURL(expectedPath);
      await marginCallsPage.clickCreateYourAccountButtonFromReady()
    });

  })
})