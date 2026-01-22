import { test, expect } from "@playwright/test";
import { TradingSectionMenu } from "../../pages/tradingSection/TradingSectionMenu";
import { CFDCalculator } from "../../pages/tradingSection/CFDCalculatorPage";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

const languages = ["EN", "FR", "DE", "AR", "RU", "ZHS", "ZHT", "IT", "NL", "PL"];

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;
    if (!license.tradingSubmenus.includes("CFD_CALCULATOR")) return;

    test(`${license.name} ${lang} – CFD Calculator: Sign up - un`, async ({
      page,
    }) => {
      const path = license.paths[lang];

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const cfdCalculator = new CFDCalculator(page);

      await tradingMenu.openCFDCalculatorPage()
    
      const expectedPath = `${path}/ways-to-trade/cfd-trading/cfd-calculator`;

      await expect(page).toHaveURL(expectedPath);
      await cfdCalculator.clickSignUpButton()
    });

    test(`${license.name} ${lang} – CFD Calculator: Try demo- un`, async ({
      page,
    }) => {
      const path = license.paths[lang];       

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const cfdCalculator = new CFDCalculator(page);

      await tradingMenu.openCFDCalculatorPage();

      const expectedPath = `${path}/ways-to-trade/cfd-trading/cfd-calculator`;

      await expect(page).toHaveURL(expectedPath);
      await cfdCalculator.clickTryDemoButton()
    });

    test(`${license.name} ${lang} – CFD Calculator: Trade now- un`, async ({
      page,
    }) => {
      const path = license.paths[lang];   
      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const cfdCalculator = new CFDCalculator(page);

      await tradingMenu.openCFDCalculatorPage();

      const expectedPath = `${path}/ways-to-trade/cfd-trading/cfd-calculator`;

      await expect(page).toHaveURL(expectedPath);
      await cfdCalculator.clickTradeNowButton()
    });

    test(`${license.name} ${lang} – CFD Calculator: Sign up - How to start- un`, async ({
      page,
    }) => {
      const path = license.paths[lang];

        // await page.pause()

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const tradingMenu = new TradingSectionMenu(page);
      const cfdCalculator = new CFDCalculator(page);

      await tradingMenu.openCFDCalculatorPage();

      const expectedPath = `${path}/ways-to-trade/cfd-trading/cfd-calculator`;

      await expect(page).toHaveURL(expectedPath);
      await cfdCalculator.clickSignUpButtonHowToStart()
    });

})
})