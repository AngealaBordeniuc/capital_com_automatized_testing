import { test, expect } from "@playwright/test";
import { AboutSectionMenu } from "../../pages/aboutSection/AboutSectionMenu";
import { ContactUsPage } from "../../pages/aboutSection/ContactUsPage";
import { aboutMenuTexts } from "../../test-data/about-menu-texts";
import { licenses } from "../../test-data/licenses";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU"];

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;
    // if (!license.aboutSubmenus.includes("CONTACT_US")) return;

    test(`${license.name} ${lang} – Contact us - un`, async ({ page }) => {
      const path = license.paths[lang];

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      const aboutMenu = new AboutSectionMenu(page);
      const contactUsPage = new ContactUsPage(page)

      await aboutMenu.openContactUsPage(
        aboutMenuTexts.ABOUT[lang],
        aboutMenuTexts.CONTACT_US[lang]
      );

      const expectedPath = `${path}/contact-us`;

      await expect(page).toHaveURL(expectedPath);
      await contactUsPage.clickCreateYourAccountButtonFromReady();
    });
  });
});
