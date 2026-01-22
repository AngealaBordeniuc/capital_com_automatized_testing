import { test, expect } from "@playwright/test";
import { AboutSectionMenu } from "../../pages/aboutSection/AboutSectionMenu";
import { InvestorRelationsPage} from "../../pages/aboutSection/InvestorRelationsPage";
import { handleOptionalPopups } from "../../helpers/pop_ups";
import { licenses } from "../../test-data/licenses";

const languages = ["EN"];

licenses.forEach((license) => {
  languages.forEach((lang) => {
    // if (!license.paths[lang]) return;
    test(`${license.name} ${lang} – Investor Relations - un`, async ({ page }) => {
      const path = license.paths[lang];

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const aboutMenu = new AboutSectionMenu(page);
      const investorRelationsPage = new InvestorRelationsPage(page);

      await aboutMenu.openInvestorRelationsPage();

      const expectedPath = `${path}/about-us/investor-relations`;

      await expect(page).toHaveURL(expectedPath);
      await investorRelationsPage.clickCreateYourAccountButtonFromReady();
    });
  });
});


