import { test, expect } from "@playwright/test";
import { AboutSectionMenu } from "../../pages/aboutSection/AboutSectionMenu";
import { OurOfficesPage } from "../../pages/aboutSection/OurOfficesPage";
import { aboutMenuTexts } from "../../test-data/about-menu-texts";
import { licenses } from "../../test-data/licenses";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU"];

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;
    // if (!license.aboutSubmenus.includes("CONTACT_US")) return;

    test(`${license.name} ${lang} – Our Offices - un`, async ({ page }) => {
      const path = license.paths[lang];

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      const aboutMenu = new AboutSectionMenu(page);
      const ourOfficesPage = new OurOfficesPage(page)

      await aboutMenu.openContactUsPage(
        aboutMenuTexts.ABOUT[lang],
        aboutMenuTexts.OUR_OFFICES[lang]
      );

      const expectedPath = `${path}/about-us/our-offices`;

      await expect(page).toHaveURL(expectedPath);
      await ourOfficesPage.clickCreateYourAccountButtonFromReady();
    });
  });
});







