import { test, expect } from "@playwright/test";
import { AboutSectionMenu } from "../../pages/aboutSection/AboutSectionMenu";
import { WhyCapitalComPage } from "../../pages/aboutSection/WhyCapitalComPage";
import { aboutMenuTexts } from "../../test-data/about-menu-texts";
import { licenses } from "../../test-data/licenses";

const languages = ["EN", "RO", "FR", "DE", "AR", "RU"];

licenses.forEach((license) => {
  languages.forEach((lang) => {
    if (!license.paths[lang]) return;

    test(`${license.name} ${lang} – Why Capital Com?, "Create your account" - un`, async ({ page }) => {
      const path = license.paths[lang];

      await page.goto(`https://capital.com${path}`, {
        waitUntil: "domcontentloaded",
      });

      const aboutMenu = new AboutSectionMenu(page);
      const whyCapitalComPage = new WhyCapitalComPage(page)

      await aboutMenu.openWhyCapitalComPage(
        aboutMenuTexts.ABOUT[lang],
        aboutMenuTexts.WHY_CAPITAL_COM[lang]
      );

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

       const aboutMenu = new AboutSectionMenu(page);
       const whyCapitalComPage = new WhyCapitalComPage(page);

       await aboutMenu.openWhyCapitalComPage(
         aboutMenuTexts.ABOUT[lang],
         aboutMenuTexts.WHY_CAPITAL_COM[lang]
       );

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

          const aboutMenu = new AboutSectionMenu(page);
          const whyCapitalComPage = new WhyCapitalComPage(page);

          await aboutMenu.openWhyCapitalComPage(
            aboutMenuTexts.ABOUT[lang],
            aboutMenuTexts.WHY_CAPITAL_COM[lang]
          );

          const expectedPath = `${path}/why-capital`;

          await expect(page).toHaveURL(expectedPath);
          await whyCapitalComPage.clickTryDemoAccountButton()
        });


  });
});





