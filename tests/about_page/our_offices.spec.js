import { test, expect } from "@playwright/test";
import { AboutSectionMenu } from "../../pages/aboutSection/AboutSectionMenu";
import { OurOfficesPage } from "../../pages/aboutSection/OurOfficesPage";
import { handleOptionalPopups } from "../../helpers/pop_ups";
import { licenses } from "../../test-data/licenses";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHS", "ZHT", "IT", "NL", "PL"];

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;

    test(`${license.name} ${lang} – Our Offices - un`, async ({ page }) => {
      const path = license.paths[lang];

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const aboutMenu = new AboutSectionMenu(page);
      const ourOfficesPage = new OurOfficesPage(page)

      await aboutMenu.openOurOfficesPage();

      const expectedPath = `${path}/about-us/our-offices`;

      await expect(page).toHaveURL(expectedPath);
      await ourOfficesPage.clickCreateYourAccountButtonFromReady();
    });
  });
});







