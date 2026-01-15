import { test, expect } from "@playwright/test";
import { AboutSectionMenu } from "../../pages/aboutSection/AboutSectionMenu";
import { HelpPage } from "../../pages/aboutSection/HelpPage";
import { aboutMenuTexts } from "../../test-data/about-menu-texts";
import { licenses } from "../../test-data/licenses";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU"];

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;
    // if (!license.aboutSubmenus.includes("HELP")) return;

    test(`${license.name} ${lang} – Help - un`, async ({ page }) => {
      const path = license.paths[lang];

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      const aboutMenu = new AboutSectionMenu(page);
      const helpPage = new HelpPage(page)

      await aboutMenu.openContactUsPage(
        aboutMenuTexts.ABOUT[lang],
        aboutMenuTexts.HELP[lang]
      );

      const expectedPath = `${path}/help`;

      await expect(page).toHaveURL(expectedPath);
      await helpPage.clickCreateYourAccountButtonFromReady();
    });
  });
});

