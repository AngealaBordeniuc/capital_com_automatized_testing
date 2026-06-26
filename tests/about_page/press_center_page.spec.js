import { test, expect } from "@playwright/test";
import { AboutSectionMenu } from "../../pages/aboutSection/AboutSectionMenu";
import { PressCenterPage } from "../../pages/aboutSection/PressCenterPage";
import { handleOptionalPopups } from "../../helpers/pop_ups";
import { licenses } from "../../test-data/licenses";


// const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHT", "IT", "NL", "PL"];
const languages = ["EN"];


licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;

 if(license.features.mostTradeButton){
    test(`${license.name} ${lang} – Press Center: Most Traded`, async ({ page }, testInfo) => {
      const userState = testInfo.project.name;
      const path = license.paths[lang];

      await page.goto(path, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const aboutMenu = new AboutSectionMenu(page);
      const pressCenterPage = new PressCenterPage(page);

      await aboutMenu.openPressCenter();

      const expectedPath = `${path}/media-centre`;

      await expect(page).toHaveURL(expectedPath);
      await pressCenterPage.clickMostTradedButton(userState);
    });
  }

  });
});
