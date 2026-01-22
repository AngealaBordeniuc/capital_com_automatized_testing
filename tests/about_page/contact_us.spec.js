import { test, expect } from "@playwright/test";
import { AboutSectionMenu } from "../../pages/aboutSection/AboutSectionMenu";
import { ContactUsPage } from "../../pages/aboutSection/ContactUsPage";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHS", "ZHT", "IT", "NL", "PL"];

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;   

    test(`${license.name} ${lang} – Contact us - un`, async ({ page }) => {
      const path = license.paths[lang];

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const aboutMenu = new AboutSectionMenu(page);
      const contactUsPage = new ContactUsPage(page)

      await aboutMenu.openContactUsPage()     

      const expectedPath = `${path}/contact-us`;

      await expect(page).toHaveURL(expectedPath);
      await contactUsPage.clickCreateYourAccountButtonFromReady();
    });
  });
});
