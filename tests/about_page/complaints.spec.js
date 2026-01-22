import { test, expect } from "@playwright/test";
import { AboutSectionMenu } from "../../pages/aboutSection/AboutSectionMenu";
import { ComplaintsPage } from "../../pages/aboutSection/ComplaintsPage";
// import { aboutMenuTexts } from "../../test-data/about-menu-texts";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHS", "ZHT"];

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;
     if (!license.aboutSubmenus.includes("COMPLAINTS")) return;

    test(`${license.name} ${lang} – Complaints - un`, async ({ page }) => {
      const path = license.paths[lang];

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page)

      const aboutMenu = new AboutSectionMenu(page);
      const complaintsPage = new ComplaintsPage(page)

      await aboutMenu.openComplaintsPage()
      
      const expectedPath = `${path}/help/complaints`;

      await expect(page).toHaveURL(expectedPath);
      await complaintsPage.clickCreateYourAccountButtonFromReady()
    });
  });
});