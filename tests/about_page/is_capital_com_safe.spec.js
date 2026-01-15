import { test, expect } from "@playwright/test";
import { AboutSectionMenu } from "../../pages/aboutSection/AboutSectionMenu";
import { IsCapitalComSafePage} from "../../pages/aboutSection/IsCapitalComSafePage";
import { aboutMenuTexts } from "../../test-data/about-menu-texts";
import { licenses } from "../../test-data/licenses";

const languages = ["EN", "FR", "DE", "AR", "RU"];

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;
    // if (!license.aboutSubmenus.includes("INVESTOR_RELATIONS")) return;

    test(`${license.name} ${lang} – Is Capital Com Safe? - un`, async ({ page }) => {
      const path = license.paths[lang];

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      const aboutMenu = new AboutSectionMenu(page);
      const isCapitalComSafePage = new IsCapitalComSafePage(page)

      await aboutMenu.openIsCapitalComSafePage(
        aboutMenuTexts.ABOUT[lang],
        aboutMenuTexts.IS_CAPITAL_COM_SAFE[lang]
      );

      const expectedPath = `${path}/security-measures`;

      await expect(page).toHaveURL(expectedPath);
      await isCapitalComSafePage.clickOpenAnAccountButton();
    });
  });
});


