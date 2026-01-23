import { test, expect } from "@playwright/test";
import { AboutSectionMenu } from "../../pages/aboutSection/AboutSectionMenu";
import { WhyCapitalComPage } from "../../pages/aboutSection/WhyCapitalComPage";
import { licenses } from "../../test-data/licenses";
import { handleOptionalPopups } from "../../helpers/pop_ups";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU", "ZHS", "ZHT", "IT", "NL", "PL"];

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;

    test(`${license.name} ${lang} – Why Capital Com?, "Create your account" - un`, async ({ page }) => {
      const path = license.paths[lang];

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      await handleOptionalPopups(page);

      const aboutMenu = new AboutSectionMenu(page);
      const whyCapitalComPage = new WhyCapitalComPage(page)

      await aboutMenu.openWhyCapitalComPage();

      const expectedPath = `${path}/why-capital`;

      await expect(page).toHaveURL(expectedPath);
      await whyCapitalComPage.clickCreateYourAccountButtonFromReady();
    });

     test(`${license.name} ${lang} – Why Capital Com?, "Create account" - un`, async ({
       page,
     }) => {
       const path = license.paths[lang];    

       await page.goto(`https://capital.com${path}`, {
         waitUntil: "domcontentloaded",
       });

       await handleOptionalPopups(page);

       const aboutMenu = new AboutSectionMenu(page);
       const whyCapitalComPage = new WhyCapitalComPage(page); 

       await aboutMenu.openWhyCapitalComPage();

       const expectedPath = `${path}/why-capital`;

       await expect(page).toHaveURL(expectedPath);
       await whyCapitalComPage.clickCreateAccountButton()
     });

        test(`${license.name} ${lang} – Why Capital Com?, "Try demo account" - un`, async ({
          page,
        }) => {
          const path = license.paths[lang];

          await page.goto(`https://capital.com${path}`, {
            waitUntil: "domcontentloaded",
          });

          await handleOptionalPopups(page);

          const aboutMenu = new AboutSectionMenu(page);
          const whyCapitalComPage = new WhyCapitalComPage(page);

          await aboutMenu.openWhyCapitalComPage();

          const expectedPath = `${path}/why-capital`;

          await expect(page).toHaveURL(expectedPath);
          await whyCapitalComPage.clickTryDemoAccountButton()
        });


  });
});





