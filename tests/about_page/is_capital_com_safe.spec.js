import { test, expect } from "@playwright/test";
import { AboutSectionMenu } from "../../pages/aboutSection/AboutSectionMenu";
import { IsCapitalComSafePage} from "../../pages/aboutSection/IsCapitalComSafePage";
import { handleOptionalPopups } from "../../helpers/pop_ups";
import { licenses } from "../../test-data/licenses";

const languages = ["EN", "FR", "DE", "AR", "RU", "ZHS", "ZHT", "IT", "NL", "PL"];

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;   

    test(`${license.name} ${lang} – Is Capital Com Safe? - un`, async ({ page }) => {
      const path = license.paths[lang];

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const aboutMenu = new AboutSectionMenu(page);
      const isCapitalComSafePage = new IsCapitalComSafePage(page)

      await aboutMenu.openIsCapitalComSafePage();

      const expectedPath = `${path}/security-measures`;

      await expect(page).toHaveURL(expectedPath);
      await isCapitalComSafePage.clickOpenAnAccountButton();
    });
  });
});


