import { test, expect } from "@playwright/test";
import { AboutSectionMenu } from "../../pages/aboutSection/AboutSectionMenu";
import { HelpPage } from "../../pages/aboutSection/HelpPage";
import { handleOptionalPopups } from "../../helpers/pop_ups";
import { licenses } from "../../test-data/licenses";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHS", "ZHT", "IT", "NL", "PL"];

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;

    test(`${license.name} ${lang} – Help - un`, async ({ page }) => {
      const path = license.paths[lang];

      await page.pause()

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const aboutMenu = new AboutSectionMenu(page);
      const helpPage = new HelpPage(page)

      await aboutMenu.openHelpPage()
     
      const expectedPath = `${path}/help`;

      await expect(page).toHaveURL(expectedPath);
      await helpPage.clickCreateYourAccountButtonFromReady();
    });
  });
});

