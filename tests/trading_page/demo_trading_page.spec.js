import { test, expect } from "@playwright/test";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import {DemoTradingPage} from"../../pages/tradingSection/DemoTradingPage";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

const languages = ["EN", "FR", "DE", "AR", "RU", "ZHT", "IT", "NL", "PL", "RO"];
// const languages = ["AR"]

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;
    if (!license.tradingSubmenus.DEMO_TRADING) return;

    test(`${license.name} ${lang} – Demo Trading: Explore demo`, async ({
      page
    }, testInfo) => {
      const userState = testInfo.project.name;
      const path = license.paths[lang];           

      await page.goto(path, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const demoTradingPage = new DemoTradingPage(page);

      await tradingMenu.openDemoTradingPage()
      const expectedPath = `${path}/trading-platforms/demo-account`;

      await expect(page).toHaveURL(expectedPath);
      await demoTradingPage.clickExploreDemoButton(userState)
    });  

  })
})
